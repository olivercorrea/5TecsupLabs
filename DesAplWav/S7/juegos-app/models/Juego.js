const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
    nombre: String,
    fechaLanzamiento: Date,
    desarrolladores: String,
    descripcion: String,
    calificacion: {
        type: Number,
        min: 1,
        max: 5
    },
    imagenUrl: String
});

const Juego = mongoose.model('Juego', juegoSchema);

module.exports = Juego;
