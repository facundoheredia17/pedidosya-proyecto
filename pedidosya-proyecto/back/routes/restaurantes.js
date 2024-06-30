const express = require("express");

const productosRouter = express.Router();

const {
  todosRestaurantes,
  unRestaurante,
  crearRestaurante,
  editarRestaurante,
  borrarRestaurante,
} = require("../controllers/restaurantes");

// Peticiones HTTP

productosRouter.get("/", todosRestaurantes);
productosRouter.get("/:id", unRestaurante);
productosRouter.post("/crear", crearRestaurante);
productosRouter.put("/editar/:id", editarRestaurante);
productosRouter.delete("/eliminar/:id", borrarRestaurante);

module.exports = productosRouter;
