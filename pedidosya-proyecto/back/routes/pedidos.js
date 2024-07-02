const express = require('express');

const pedidosRouter = express.Router();

const {
    mostrarPedidos,
    crearPedido,
    unPedido,
} = require('../controllers/pedidos');


pedidosRouter.get('/', mostrarPedidos);
pedidosRouter.get('/:id', unPedido);
pedidosRouter.post('/crear', crearPedido);

module.exports = pedidosRouter; 
