const express = require("express");

const productosRouter = express.Router();

const {
  todosProductos,
  unProducto,
  crearProducto,
  editarProducto,
  borrarProducto,
} = require("../controllers/productos");

//Peticiones HTTP

productosRouter.get("/:restauranteId/productos", todosProductos);
productosRouter.get("/:restauranteId/productos/:id", unProducto);
productosRouter.post("/:restauranteId/productos/crear", crearProducto);
productosRouter.put("/:restauranteId/productos/editar/:id", editarProducto);
productosRouter.delete("/:restauranteId/productos/eliminar/:id", borrarProducto);

module.exports = productosRouter;
