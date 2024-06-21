import React from 'react';

const Navbar = ({ cambiarPagina }) => {
  const handleClickLogo = () => {
    cambiarPagina('home');
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={handleClickLogo} className="logo-boton">
            <img src="/logopeya.jpg" alt="Pedidos Ya Logo"/>
          </button>
        </li>
        <li><button onClick={() => cambiarPagina('home')}>Inicio</button></li>
        <li><button onClick={() => cambiarPagina('restaurantes')}>Restaurantes</button></li>
        <li><button onClick={() => cambiarPagina('pedidos')}>Pedidos</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
