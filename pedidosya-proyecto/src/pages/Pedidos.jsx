import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Pedidos.css';

const Pedidos = () => {
  const pedidos = [
    {
      id: 1,
      restaurante: 'La Pizzada Centro',
      productos: [
        { id: 1, nombre: 'Milanesa a la napolitana con guarnición', cantidad: 2, precio: 5000 },
        { id: 2, nombre: 'Pizza especial grande', cantidad: 1, precio: 5000 },
      ],
      estado: 'En Proceso',
    },
    {
      id: 2,
      restaurante: 'Leno Barrio Norte',
      productos: [
        { id: 3, nombre: 'Cheeseburguer doble con papas fritas', cantidad: 3, precio: 4000 },
      ],
      estado: 'Entregado',
    },
  ];

  const calcularTotal = (productos) => {
    return productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  return (
    <>
      <Navbar />
      <div className="pedidos-container">
        <h2 className="pedidos-titulo">Pedidos</h2>
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="pedido-card">
            <h3 className="nombre-restaurante">Restaurante: {pedido.restaurante}</h3>
            <ul className="lista-productos">
              {pedido.productos.map((item) => (
                <li key={item.id} className="producto-item-pedido">
                  {item.nombre} - Cantidad: {item.cantidad} - Precio: ${item.precio}
                </li>
              ))}
            </ul>
            <p className={`estado-pedido ${pedido.estado === 'Entregado' ? 'entregado' : 'en-proceso'}`}>
              Estado: {pedido.estado}
            </p>
            <p className="total-pedido">Total: ${calcularTotal(pedido.productos)}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Pedidos;
