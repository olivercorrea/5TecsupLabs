const express = require('express');
const router = express.Router();
const Juego = require('../models/Juego');

// Ruta para obtener todos los juegos
router.get('/', async (req, res) => {
    const juegos = await Juego.find();
    res.send(juegos);
});

// Ruta para crear un nuevo juego
router.post('/', async (req, res) => {
    let juego = new Juego({
        nombre: req.body.nombre,
        fechaLanzamiento: req.body.fechaLanzamiento,
        desarrolladores: req.body.desarrolladores,
        descripcion: req.body.descripcion,
        calificacion: req.body.calificacion,
        imagenUrl: req.body.imagenUrl
    });
    juego = await juego.save();
    res.send(juego);
});

module.exports = router;
