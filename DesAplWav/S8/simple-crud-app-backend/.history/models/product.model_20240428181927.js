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
