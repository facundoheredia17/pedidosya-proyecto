import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Restaurantes from './pages/Restaurantes';
import Productos from './components/Productos';
import Pedidos from './pages/Pedidos';
import Login from './pages/Login';
import Footer from './components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';


const App = () => {
  const [paginaActual, setPaginaActual] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const estaAutenticado = localStorage.getItem('autenticado') === 'true';
    setAutenticado(estaAutenticado);
    if (estaAutenticado) {
      setPaginaActual('home'); // Cambia a la página de inicio después de verificar la autenticación
    } else {
      setPaginaActual('login'); // Cambia a la página de login si no está autenticado
    }
  }, []);

  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  const cerrarSesion = () => {
    setAutenticado(false);
    localStorage.setItem('autenticado', 'false');
    setPaginaActual('login');
  };

  let contenidoPagina;

  if (autenticado) {
    if (paginaActual === 'home') {
      contenidoPagina = <Home />;
    } else if (paginaActual === 'restaurantes') {
      contenidoPagina = <Restaurantes cambiarPagina={cambiarPagina} />;
    } else if (paginaActual.startsWith('productos-')) {
      const restauranteId = parseInt(paginaActual.split('-')[1]);
      contenidoPagina = <Productos restauranteId={restauranteId} cambiarPagina={cambiarPagina} />;
    } else if (paginaActual === 'pedidos') {
      contenidoPagina = <Pedidos />;
    } else {
      contenidoPagina = <Home />;
    }
  } else {
    contenidoPagina = <Login cambiarPagina={cambiarPagina} />;
  }

  return (
    <div className="App">
      {autenticado && <Navbar cambiarPagina={cambiarPagina} cerrarSesion={cerrarSesion} />}
      <div className="MainContent">
        {contenidoPagina}
      </div>
      <Footer />
    </div>
  );
};

export default App;
