import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Restaurantes from './pages/Restaurantes';
import Pedidos from './pages/Pedidos';
import NoExiste from './components/NoExiste';
import Productos from './pages/Productos';
import Registro from './pages/Registrarse';
import AgregarRestaurante from './pages/AgregarRestaurante';
import EditarRestaurante from './pages/EditarRestaurante';
import AgregarProducto from './pages/AgregarProducto';
import EditarProducto from './pages/EditarProducto';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  const [logueado, setLogueado] = useState(false);

  useEffect(() => {
    const autenticado = localStorage.getItem('autenticado');
    if (autenticado === 'true') {
      setLogueado(true);
    }
  }, []);

  const iniciarSesion = () => {
    setLogueado(true);
    localStorage.setItem('autenticado', 'true');
  };

  const cerrarSesion = () => {
    setLogueado(false);
    localStorage.removeItem('autenticado');
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar logueado={logueado} cerrarSesion={cerrarSesion} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
          <Route path="/restaurantes/agregar" element={<AgregarRestaurante />} />
          <Route path="/restaurantes/editar/:id" element={<EditarRestaurante />} />
          <Route path="/restaurantes/:restauranteId/productos" element={<Productos />} />
          <Route path="/restaurantes/:restauranteId/productos/agregar" element={<AgregarProducto />} />
          <Route path="/restaurantes/:restauranteId/productos/editar/:id" element={<EditarProducto />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/login" element={<Login setAutenticado={iniciarSesion} />} />
          <Route path="/registrarse" element={<Registro />} />
          <Route path="*" element={<NoExiste />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;