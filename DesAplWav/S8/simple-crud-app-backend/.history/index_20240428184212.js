const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();


// middleware
app.use(express.json()); // Para permitir pasar Json por defecto
// app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.send("Hola desde la API node updated 2.");
});

// ! Para guardar
app.post("/api/products", (req, res) => {
    // console.log(req.body)
    // res.send(req.body);
    try {

    } catch {
        res.status(500).json({message: console.error.message}) // * En caso de error
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
