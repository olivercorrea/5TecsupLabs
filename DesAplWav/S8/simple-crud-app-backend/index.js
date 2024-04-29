const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

// middleware
app.use(express.json()); // Para permitir pasar Json por defecto
app.use(express.urlencoded({extended: false})); // Para permitir form-data, es parecido a json

app.get("/", (req, res) => {
  res.send("Hola desde la API node updated 2.");
});

// Leer la API, o listar todos los productos
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message }); // * En caso de error
  }
});

// Listar el producto por id
app.get("/api/product/:id", async (req, res) => {
  // El que se le quite la s no afecta en nada
  try {
    const { id } = req.params; // Una primera manera
    const product = await Product.findById(id);
    // const product = await Product.findById(req.params.id) // otra manera manera
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message }); // * En caso de error
  }
});

// ! Para guardar
app.post("/api/products", async (req, res) => {
  // * Es importante para el await
  // console.log(req.body)
  // res.send(req.body);
  try {
    const product = await Product.create(req.body); // para guardar el producto
    res.status(200).json(product);
  } catch {
    res.status(500).json({ message: console.error.message }); // * En caso de error
  }
});

// Actualizar un producto
app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params; // Primer método
    const product = await Product.findByIdAndUpdate(id, req.body);
    // const product = await Product.findByIdAndUpdate(req.body.id, req.body, {new: true}) // 2 método

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    // Es para estar seguros que esta el producto
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message }); // * En caso de error
  }
});

// Borrar un producto por id
app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }

    res.status(200).json({ message: "Producto eliminado exitosamente." });
  } catch (error) {
    res.status(500).json({ message: error.message }); // * En caso de error
  }
});

mongoose
  .connect("mongodb://localhost/Node-API")
  .then(() => {
    console.log("Conectado a la base de datos.");
    app.listen(3000, () => {
      console.log("Puerto 3000");
    });
  })
  .catch(() => {
    console.log("No se pudo conectar a la base de datos.");
  });
