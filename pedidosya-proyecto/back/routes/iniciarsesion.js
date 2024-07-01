const express = require('express');
const usuariosRouter = express.Router();

const { registrarUsuario } = require('../controllers/usuarios');
const { iniciarSesion } = require('../controllers/iniciarsesion');

usuariosRouter.post('/registrar', registrarUsuario);
usuariosRouter.post('/login', iniciarSesion);

module.exports = usuariosRouter;