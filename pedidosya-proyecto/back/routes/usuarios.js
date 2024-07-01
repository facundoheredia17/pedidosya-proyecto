const express = require('express');

const usuariosRouter = express.Router();

const {
    mostrarUsuarios,
    registrarUsuario,
} = require('../controllers/usuarios');


usuariosRouter.get('/', mostrarUsuarios);
usuariosRouter.post('/registrar', registrarUsuario);

module.exports = usuariosRouter; 
