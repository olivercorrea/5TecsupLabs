const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.listen(3000, () => {
    console.log('Puerto 3000');
});

app.get('/', (req, res) => {
    res.send('Hola desde la API node updated 2.')
})