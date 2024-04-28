const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/videojuegos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected!');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// Rutas
app.use('/', require('./routes/index'));
app.use('/', require('./routes/videojuegos'));

app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
