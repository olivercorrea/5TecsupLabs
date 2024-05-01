const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { check, validationResult } = require('express-validator'); // importamos express-validator

const router = express.Router();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Creamos un middleware para validar los datos del formulario de usuario
const validateUser = [
  check("name", "El nombre es requerido").not().isEmpty(),
  check("email", "El email es requerido").not().isEmpty().isEmail(),
  check("password", "La contraseña es requerida").not().isEmpty(),
];

router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("index", { users, errors: {} });
});

router.post("/", validateUser, async (req, res) => {
  const errors = validationResult(req); // verificamos si hay errores en la validación
  if (!errors.isEmpty()) {
    // si hay errores, renderizamos la vista con los mensajes de error
    const users = await User.find();
    res.render("index", { errors: errors.mapped(), users });
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
