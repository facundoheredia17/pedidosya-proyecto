import React from 'react';
import { Link } from 'react-router-dom';
import './Restaurantes.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Restaurantes = () => {
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
    <>
      <Navbar />
      <div className="restaurantes-container">
        <h2>Restaurantes</h2>
        {restaurantes.map((restaurante) => (
          <div key={restaurante.id} className="restaurante-item">
            <img
              src={restaurante.logo}
              alt={`Logo de ${restaurante.nombre}`}
              className="restaurante-logo"
            />
            <div className="restaurante-info">
              <h3>{restaurante.nombre}</h3>
              <p>{restaurante.descripcion}</p>
              <Link to={`/restaurantes/${restaurante.id}/productos`} className="boton">
                Ver Productos
              </Link>
            </div>
          </div>
        ))}
        <div className="boton-agregar-restaurante-container">
          <Link to="/restaurantes/agregar" className="boton-agregar-restaurante">
            Agregar Restaurante
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurantes;
