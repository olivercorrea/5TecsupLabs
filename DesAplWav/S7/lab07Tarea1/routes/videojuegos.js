const express = require('express');
const router = express.Router();
const Videojuego = require('../models/Videojuego');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/listaVideojuegos', async (req, res) => {
    try {
        const videojuegos = await Videojuego.find();
        res.render('listaVideojuegos', { videojuegos });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al recuperar la lista de videojuegos.');
    }
});

router.get('/editarVideojuego/:id', async (req, res) => {
    try {
        const videojuego = await Videojuego.findById(req.params.id);
        res.render('editarVideojuego', { videojuego });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al recuperar el videojuego.');
    }
});

router.post('/actualizarVideojuego/:id', upload.single('nuevaImagen'), async (req, res) => {
    const { nombre, plataforma, desarrollador, imagen } = req.body;

    try {
        const videojuego = await Videojuego.findById(req.params.id);
        videojuego.nombre = nombre;
        videojuego.plataforma = plataforma;
        videojuego.desarrollador = desarrollador;

        // Verifica si se ha subido una nueva imagen
        if (req.file) {
            videojuego.imagen = req.file.filename;
        }

        await videojuego.save();
        res.redirect('/listaVideojuegos');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el videojuego.');
    }
});


router.get('/eliminarVideojuego/:id', async (req, res) => {
    try {
        await Videojuego.findByIdAndRemove(req.params.id);
        res.redirect('/listaVideojuegos');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el videojuego.');
    }
});

router.post('/nuevoVideojuego', upload.single('imagen'), async (req, res) => {
    const { nombre, plataforma, desarrollador } = req.body;

    try {
        const nuevoVideojuego = new Videojuego({
            nombre,
            plataforma,
            desarrollador,
            imagen: req.file.filename
        });

        await nuevoVideojuego.save();
        res.redirect('/listaVideojuegos');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar el videojuego.');
    }
});

module.exports = router;
