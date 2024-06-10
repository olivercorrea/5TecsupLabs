const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  genre: { type: String, required: true },
  releaseYear: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear(),
  },
  duration: { type: Number, required: true, min: 1 }, // duración en segundos
  imageUrl: { type: String, default: "default-album-cover.jpg" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Song", itemSchema);
