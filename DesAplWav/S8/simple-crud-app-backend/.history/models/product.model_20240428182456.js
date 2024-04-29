//  * * Modelo para guardar los datos en la base de datos
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Ingrese un nombre de producto por favor."],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // * * Nos permite dos espacios más, cuando es creado y actualizado, nos dira el tiempo de creación y la fecha de ultima actualización
  }
);

// ! Permitir que mongoDB use este esquema

const Product = mongoose.model("Product", ProductSchema); // * * Product será todo minúscula y se añadirá una s al final, es decir que en la base de datos no será Product sino más bien products 

// ! Exportamos el modelo
module.exports = Product;