import React from 'react';
import './Restaurantes.css';

const Restaurantes = ({ cambiarPagina }) => {
  const restaurantes = [
    {
      id: 1,
      nombre: 'La Pizzada Centro',
      logo: '/pizzadalogo.png',
      descripcion: '25 de Mayo y 24 de Septiembre',
    },
    {
      id: 2,
      nombre: 'Leno Barrio Norte',
      logo: '/lenologo.webp',
      descripcion: 'Virgen de la Merced 885',
    },
  ];

  return (
    <div className="restaurantes-container">
      <h2>Restaurantes</h2>
      {restaurantes.map(restaurante => (
        <div key={restaurante.id} className="restaurante-item">
          <img src={restaurante.logo} alt={`Logo de ${restaurante.nombre}`} className="restaurante-logo" />
          <div className="restaurante-info">
            <h3>{restaurante.nombre}</h3>
            <p>{restaurante.descripcion}</p>
            <button onClick={() => cambiarPagina(`productos-${restaurante.id}`)}>Ver Productos</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Restaurantes;