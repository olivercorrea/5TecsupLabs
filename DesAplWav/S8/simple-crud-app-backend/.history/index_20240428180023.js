const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.get('/', (req, res) => {
    res.send('Hola desde la API node updated 2.')
})

mongoose.connect('mongodb://localhost/Node-API')
.then(() => {
    console.log("Conectado a la base de datos.");
    app.listen(3000, () => {
        console.log('Puerto 3000');
    });
})