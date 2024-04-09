const express = require('express');
const router = express.Router();
const pedidos = require('../controllers/pedidos');

router.get('/', function(req, res){
    pedidos.index(req,res);
});

router.post('/addpedido', function(req, res) {
    pedidos.create(req,res);
});

router.get('/getpedido', function(req, res) {
    pedidos.list(req,res);
});

module.exports = router;
