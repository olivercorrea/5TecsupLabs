const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Juego = require('./models/Juego'); // Asegúrate de que la ruta al archivo es correcta

// Para utilizar las rutas
const juegosRouter = require('./routes/juegos');
app.use('/api/juegos', juegosRouter);

// Para usar EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost/juegosdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.error('No se pudo conectar a MongoDB...', err));

// Middleware para parsear el body de los requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas para servir las vistas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/lista', async (req, res) => {
    const juegos = await Juego.find();
    res.render('lista', { juegos });
});

// Puerto
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
