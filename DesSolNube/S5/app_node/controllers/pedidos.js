const path = require('path');
const Pedido = require('../models/pedidos');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/pedidos.html'));
};

exports.create = function (req, res) {
    var newPedido = new Pedido(req.body);
    console.log(req.body);
    newPedido.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save deliverydb to database');
        } else {
            res.redirect('/pedidos/getpedido');
        }
  });
               };

exports.list = function (req, res) {
        Pedido.find({}).exec(function (err, pedidos) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getpedido', {
                        pedidos: pedidos
             });
        });
};
