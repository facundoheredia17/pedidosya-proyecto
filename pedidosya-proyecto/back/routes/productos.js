const express = require("express");

const productosRouter = express.Router();

const {
  todosProductos,
  unProducto,
  crearProducto,
  editarProducto,
  borrarProducto,
} = require("../controllers/Productos");

//Peticiones HTTP

productosRouter.get("/:id_restaurante/productos", todosProductos);
productosRouter.post("/:id_restaurante/productos/crear", crearProducto);
productosRouter.get("/:id_restaurante/productos/:id", unProducto);
productosRouter.put("/:id_restaurante/productos/editar/:id", editarProducto);
productosRouter.delete("/:id_restaurante/productos/eliminar/:id", borrarProducto);

module.exports = productosRouter;
