import React from 'react';
import './Navbar.css';

const Navbar = ({ cambiarPagina, cerrarSesion }) => {
  const handleClickLogo = () => {
    cambiarPagina('home');
  };

  const handleCerrarSesion = () => {
    cerrarSesion();
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={handleClickLogo} className="logo-boton">
            <img src="/logopeya.jpg" alt="Pedidos Ya Logo" />
          </button>
        </li>
        <li><button onClick={() => cambiarPagina('home')}>Inicio</button></li>
        <li><button onClick={() => cambiarPagina('restaurantes')}>Restaurantes</button></li>
        <li><button onClick={() => cambiarPagina('pedidos')}>Pedidos</button></li>
        <li className="cerrar-sesion">
          <button onClick={handleCerrarSesion}>
            <img src="/logout.png" alt="Cerrar Sesión" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
