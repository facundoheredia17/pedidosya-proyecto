import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Restaurantes from './pages/Restaurantes';
import Productos from './components/Productos';
import Pedidos from './pages/Pedidos';
import './App.css';

const App = () => {
  const [paginaActual, setPaginaActual] = useState('');

  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  let contenidoPagina;
  if (paginaActual === 'home') {
    contenidoPagina = <Home cambiarPagina={cambiarPagina} />;
  } else if (paginaActual === 'restaurantes') {
    contenidoPagina = <Restaurantes cambiarPagina={cambiarPagina} />;
  } else if (paginaActual.startsWith('productos-')) {
    const restauranteId = parseInt(paginaActual.split('-')[1]);
    contenidoPagina = <Productos restauranteId={restauranteId} cambiarPagina={cambiarPagina} />;
  } else if (paginaActual === 'pedidos') {
    contenidoPagina = <Pedidos />;
  } else {
    contenidoPagina = <Home cambiarPagina={cambiarPagina} />;
  }

  return (
    <div className="App">
      <Navbar cambiarPagina={cambiarPagina} />
      {contenidoPagina}
    </div>
  );
};

export default App;
