const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
    res.render('index', { nombre: 'Usuario Pug' });
});

app.get('/miplantilla-pug', (req, res) => {
    res.render('miplantilla', { mensaje: '¡Hola desde la plantilla Pug!' });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
    res.render('index.ejs', { nombre: 'Usuario EJS' });
});

app.get('/miplantilla-ejs', (req, res) => {
    res.render('miplantilla.ejs', { mensaje: '¡Hola desde la plantilla EJS!' });
});

// Rutas dinámicas
app.get('/perfil/:id', (req, res) => {
    const userId = req.params.id;
    // Aquí puedes buscar los datos de un usuario en una base de datos, por ejemplo:
    const user = { id: userId, nombre: 'Usuario ' + userId};
    res.render('perfil', { user: user });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});