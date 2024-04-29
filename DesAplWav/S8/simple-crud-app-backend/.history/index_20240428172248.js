const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Puerto 3000');
});

app.get('/', (req, res) => {
    res.send('Hola desde la terminal')
})