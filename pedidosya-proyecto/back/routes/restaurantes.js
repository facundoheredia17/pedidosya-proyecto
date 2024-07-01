const express = require("express");

const restaurantesRouter = express.Router();

const {
  todosRestaurantes,
  unRestaurante,
  crearRestaurante,
  editarRestaurante,
  borrarRestaurante,
} = require("../controllers/restaurantes");

// Peticiones HTTP

restaurantesRouter.get("/", todosRestaurantes);
restaurantesRouter.get("/:id", unRestaurante);
restaurantesRouter.post("/crear", crearRestaurante);
restaurantesRouter.put("/editar/:id", editarRestaurante);
restaurantesRouter.delete("/eliminar/:id", borrarRestaurante);

module.exports = restaurantesRouter;
