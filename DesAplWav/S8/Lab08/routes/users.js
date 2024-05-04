const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator"); 

const router = express.Router();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Creamos un middleware para validar los datos del formulario de usuario
const validateUser = [
  // Validación del nombre
  check("name", "El nombre debe tener al menos 3 letras y no contener números")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 letras")
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage("El nombre no debe contener números"),

  // Validación del correo electrónico
  check("email", "Ingresa un correo válido")
    .isEmail()
    .withMessage("El correo debe contener un @"),

  // Validación de la contraseña
  check("password", "La contraseña debe ser mínima de 8 caracteres")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe ser mínima de 8 caracteres")
    .not()
    .isEmpty()
    .withMessage("La contraseña es requerida"),
];

router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("index", { users, errors: {} });
});

router.post("/", validateUser, async (req, res) => {
  const errors = validationResult(req); // verificamos si hay errores en la validación
  if (!errors.isEmpty()) {
    // si hay errores, renderizamos la vista con los mensajes de error
    const extractedErrors = {};
    errors.array().map((err) => (extractedErrors[err.param] = err.msg));
    // Pasamos los errores y los usuarios a la vista
    const users = await User.find(); 
    res.render("index", { errors: extractedErrors, users });
    return;
  }

  const salt = await bcrypt.genSalt(10); // genera un sal
  const hashedPassword = await bcrypt.hash(req.body.password, salt); // hashea la contraseña usando la sal
  const newUser = new User({ ...req.body, password: hashedPassword }); // crea un nuevo usuario con la contraseña hasheada
  //const newUser = new User(req.body);
  await newUser.save();
  res.redirect("/users");
});

router.get("/edit/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("partials/edit", { user });
});

router.post("/update/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/users");
});

router.get("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/users");
});

module.exports = router;
