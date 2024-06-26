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
  
  const [pagina, setPagina] = useState(localStorage.getItem('pagina') || 'login');
  const [autenticado, setAutenticado] = useState(localStorage.getItem('autenticado') === 'true');
  const [restauranteId, setRestauranteId] = useState(null);

  
  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina.startsWith('productos-')) {
      const id = parseInt(nuevaPagina.split('-')[1]);
      setRestauranteId(id);
      setPagina('productos');
    } else {
      setPagina(nuevaPagina);
    }
   
    localStorage.setItem('pagina', nuevaPagina);
  };

  const cerrarSesion = () => {
    localStorage.removeItem('autenticado');
    setAutenticado(false);
    setPagina('login');
  };

 
  useEffect(() => {

    const storedPage = localStorage.getItem('pagina');
    if (autenticado && storedPage !== 'login') {
      setPagina(storedPage || 'home');
    } else {
      setPagina('login');
    }
  }, [autenticado]);


  const renderContent = () => {
    switch (pagina) {
      case 'home':
        return <Home cambiarPagina={cambiarPagina} />;
      case 'restaurantes':
        return <Restaurantes cambiarPagina={cambiarPagina} />;
      case 'productos':
        return <Productos restauranteId={restauranteId} cambiarPagina={cambiarPagina} />;
      case 'pedidos':
        return <Pedidos />;
      case 'login':
      default:
        return <Login cambiarPagina={cambiarPagina} setAutenticado={setAutenticado} />;
    }
  };

  return (
    <div>
      {autenticado && pagina !== 'login' && (
        <Navbar cambiarPagina={cambiarPagina} cerrarSesion={cerrarSesion} />
      )}
      {renderContent()}
      <Footer />
    </div>
  );
};

export default App;
