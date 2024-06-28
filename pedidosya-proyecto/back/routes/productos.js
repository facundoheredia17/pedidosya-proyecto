const express = require("express");

const router = express.Router();

const {
  todosProductos,
  unProducto,
  crearProducto,
  editarProducto,
  borrarProducto,
} = require("../controllers/Productos");

//Peticiones HTTP

router.get("/productos", todosProductos);
router.get("/productos/:id", unProducto);
router.post("/productos/crear", crearProducto);
router.put("/productos/editar/:id", editarProducto);
router.delete("/productos/eliminar/:id", borrarProducto);

module.exports = router;
