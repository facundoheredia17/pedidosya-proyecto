import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logueado, cerrarSesion }) => {
  const handleCerrarSesion = () => {
    cerrarSesion();
  };

  return (
    <nav className="barra-navegacion">
      <ul className="lista-items">
        <li className="item-logo">
          <Link to="/" className="enlace-logo">
            <img src="/logopeya.jpg" alt="Pedidos Ya Logo" className="logo" />
          </Link>
        </li>
        <li className="item">
          <Link to="/home" className="enlace">Inicio</Link>
        </li>
        <li className="item">
          <Link to="/restaurantes" className="enlace">Restaurantes</Link>
        </li>
        <li className="item">
          <Link to="/pedidos" className="enlace">Pedidos</Link>
        </li>
      </ul>
      <div className="boton-cerrar-sesion">
        {logueado ? (
          <button className="boton" onClick={handleCerrarSesion}>
            <img src="/logout.png" alt="Cerrar Sesión" className="icono" />
          </button>
        ) : (
          <Link to="/login" className="boton">
            <img src="/login.png" alt="Iniciar Sesión" className="icono" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;