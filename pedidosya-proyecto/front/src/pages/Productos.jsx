import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Productos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Productos = () => {
  const { restauranteId } = useParams();
  const [pedido, setPedido] = useState([]);
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8000/productos/${restauranteId}/productos`
      );
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener productos", error);
    }
  };

  const handleChange = async(id) => {
    console.log(id)
    let response = await axios.delete(`http://localhost:8000/productos/${restauranteId}/productos/eliminar/${id}`);
    if(response){
      alert("Producto eliminado correctamente");
      getProductos();
    }
  }

  useEffect(() => {
    getProductos();
  }, [restauranteId]);

  const agregarAlPedido = (producto) => {
    setPedido((prevPedido) => {
      const productoExistente = prevPedido.find(
        (item) => item.id === producto.id
      );
      if (productoExistente) {
        return prevPedido.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevPedido, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelPedido = (productoId) => {
    setPedido((prevPedido) => {
      const productoExistente = prevPedido.find(
        (item) => item.id === productoId
      );
      if (productoExistente.cantidad > 1) {
        return prevPedido.map((item) =>
          item.id === productoId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        );
      } else {
        return prevPedido.filter((item) => item.id !== productoId);
      }
    });
  };

  const calcularSubtotal = () => {
    return pedido.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  return (
    <>
      <Navbar />
      <div className="pagina-productos">
        <div className="contenedor-productos">
          <h2>Productos</h2>
          {productos.length === 0 ? (
            <p>No hay productos disponibles.</p>
          ) : (
            productos.map((producto) => (
              <div key={producto.id} className="item-producto">
                <img
                  src={producto.imagen}
                  alt={`Imagen de ${producto.nombre}`}
                  className="logo-producto"
                />
                <div className="info-producto">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <p>Precio: ${producto.precio}</p>
                  <button
                    className="boton-agregar-producto"
                    onClick={() => agregarAlPedido(producto)}
                  >
                    Agregar al Pedido
                  </button>
                  <Link
                    to={`/restaurantes/${restauranteId}/productos/editar/${producto.id}`}
                    className="btn btn-success"
                  >
                    Editar producto
                  </Link>
                  <button
                    to={`productos/${restauranteId}/productos/eliminar/${producto.id}`}
                    className="btn btn-danger"
                    onClick={() => handleChange(producto.id)}
                  >
                    Eliminar producto
                  </button>
                </div>
              </div>
            ))
          )}
          <Link to="/restaurantes" className="boton-volver">
            Volver a Restaurantes
          </Link>
          <Link
            to={`/restaurantes/${restauranteId}/productos/agregar`}
            className="boton-volver"
          >
            Agregar producto
          </Link>
        </div>

        <div className="contenedor-pedido">
          <h2>Pedido</h2>
          {pedido.length === 0 ? (
            <p>No hay productos en el pedido.</p>
          ) : (
            pedido.map((item) => (
              <div key={item.id} className="item-pedido">
                <h3>{item.nombre}</h3>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio total: ${item.precio * item.cantidad}</p>
                <button
                  className="boton-eliminar"
                  onClick={() => eliminarDelPedido(item.id)}
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
          <div className="subtotal-pedido">
            <h3>Subtotal: ${calcularSubtotal()}</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productos;
