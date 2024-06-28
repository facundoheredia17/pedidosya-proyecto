const express = require("express");

const router = express.Router();

const {
  todosRestaurantes,
  unRestaurante,
  crearRestaurante,
  editarRestaurante,
  borrarRestaurante,
} = require("../controllers/restaurantes");

//Peticiones HTTP

router.get("/restaurantes", todosRestaurantes);
router.get("/restaurantes/:id", unRestaurante);
router.post("/restaurantes/crear", crearRestaurante);
router.put("/restaurantes/editar/:id", editarRestaurante);
router.delete("/restaurantes/eliminar/:id", borrarRestaurante);

module.exports = router;
