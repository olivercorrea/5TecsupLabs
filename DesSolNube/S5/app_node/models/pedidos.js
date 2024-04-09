const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pedidos = new Schema ({
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
});

module.exports = mongoose.model('Pedidos', Pedidos)
