const mongoose = require('mongoose');

const videojuegoSchema = new mongoose.Schema({
  nombre: String,
  plataforma: String,
  desarrollador: String,
  imagen: String // Ruta de la imagen
});

module.exports = mongoose.model('Videojuego', videojuegoSchema);
