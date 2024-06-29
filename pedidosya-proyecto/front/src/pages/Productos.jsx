import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Productos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Productos = () => {
  const { restauranteId } = useParams();
  const [pedido, setPedido] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    console.log('Restaurante ID:', restauranteId); // Debugging
    if (restauranteId === '1') {
      setProductos([
        {
          id: 1,
          nombre: 'Milanesa a la napolitana con guarnición',
          descripcion: 'Milanesa de carne, salsa de tomate, queso mozzarella, y orégano, incluye papas fritas.',
          precio: 5000,
          imagen: '/milanesa.webp',
        },
        {
          id: 2,
          nombre: 'Pizza especial grande',
          descripcion: 'Masa de elaboración casera, salsa de tomate, jamón, queso mozzarella, huevo, aceitunas, morrón y cilantro.',
          precio: 5000,
          imagen: '/pizza.png',
        },
      ]);
    } else if (restauranteId === '2') {
      setProductos([
        {
          id: 3,
          nombre: 'Hamburguesa triple con papas fritas',
          descripcion: 'Triple hamburguesa de carne, triple cheddar, tomate, cebolla crispy, queso cremoso, acompañada de papas fritas.',
          precio: 6500,
          imagen: '/hamburguesa.jpg',
        },
        {
          id: 4,
          nombre: 'Cheeseburguer doble con papas fritas',
          descripcion: 'Doble hamburguesa de carne, doble cheddar, ketchup y cebolla picada, acompañada de papas fritas.',
          precio: 4000,
          imagen: '/hamburguesadoble.webp',
        },
      ]);
    }
    console.log('Productos:', productos); // Debugging
  }, [restauranteId]);

  const agregarAlPedido = (producto) => {
    setPedido((prevPedido) => {
      const productoExistente = prevPedido.find((item) => item.id === producto.id);
      if (productoExistente) {
        return prevPedido.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevPedido, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelPedido = (productoId) => {
    setPedido((prevPedido) => {
      const productoExistente = prevPedido.find((item) => item.id === productoId);
      if (productoExistente.cantidad > 1) {
        return prevPedido.map((item) =>
          item.id === productoId ? { ...item, cantidad: item.cantidad - 1 } : item
        );
      } else {
        return prevPedido.filter((item) => item.id !== productoId);
      }
    });
  };

  const calcularSubtotal = () => {
    return pedido.reduce((total, item) => total + item.precio * item.cantidad, 0);
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
                <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} className="logo-producto" />
                <div className="info-producto">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <p>Precio: ${producto.precio}</p>
                  <button className="boton-agregar-producto" onClick={() => agregarAlPedido(producto)}>Agregar al Pedido</button>
                </div>
              </div>
            ))
          )}
          <Link to="/restaurantes" className="boton-volver">Volver a Restaurantes</Link>
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
                <button className="boton-eliminar" onClick={() => eliminarDelPedido(item.id)}>Eliminar</button>
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
