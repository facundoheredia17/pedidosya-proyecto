import React, { useState } from 'react';
import './Productos.css';

const Productos = ({ restauranteId, cambiarPagina }) => {
  const [pedido, setPedido] = useState([]);

  let productos = [];
  if (restauranteId === 1) {
    productos = [
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
    ];
  } else if (restauranteId === 2) {
    productos = [
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
    ];
  }

  const agregarAlPedido = (producto) => {
    setPedido(prevPedido => {
      const productoExistente = prevPedido.find(item => item.id === producto.id);
      if (productoExistente) {
        return prevPedido.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevPedido, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelPedido = (productoId) => {
    setPedido(prevPedido => {
      const productoExistente = prevPedido.find(item => item.id === productoId);
      if (productoExistente.cantidad > 1) {
        return prevPedido.map(item =>
          item.id === productoId ? { ...item, cantidad: item.cantidad - 1 } : item
        );
      } else {
        return prevPedido.filter(item => item.id !== productoId);
      }
    });
  };

  const calcularSubtotal = () => {
    return pedido.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <div className="productos-page">
      <div className="productos-container">
        <h2>Productos</h2>
        {productos.map(producto => (
          <div key={producto.id} className="producto-item">
            <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} className="producto-logo" />
            <div className="producto-info">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
              <button className="view-products-button" onClick={() => agregarAlPedido(producto)}>Agregar al Pedido</button>
            </div>
          </div>
        ))}
        <button className="back-button" onClick={() => cambiarPagina('restaurantes')}>Volver a Restaurantes</button>
      </div>
      
      <div className="pedido-container">
        <h2>Pedido</h2>
        {pedido.length === 0 ? (
          <p>No hay productos en el pedido.</p>
        ) : (
          pedido.map(item => (
            <div key={item.id} className="pedido-item">
              <h3>{item.nombre}</h3>
              <p>Cantidad: {item.cantidad}</p>
              <p>Precio total: ${item.precio * item.cantidad}</p>
              <button className="eliminar-button" onClick={() => eliminarDelPedido(item.id)}>Eliminar</button>
            </div>
          ))
        )}
        <div className="pedido-subtotal">
          <h3>Subtotal: ${calcularSubtotal()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Productos;
