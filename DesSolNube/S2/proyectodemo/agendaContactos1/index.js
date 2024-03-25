const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/contacts', require('./api/contacts'));

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Bienvenido a tu Agenda de Contactos!');
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});



