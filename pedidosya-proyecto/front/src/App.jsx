import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Restaurantes from './pages/Restaurantes';
import Pedidos from './pages/Pedidos';
import NoExiste from './components/NoExiste';
import Productos from './pages/Productos';
import Registrarse from './pages/Registrarse';
import AgregarRestaurante from './pages/AgregarRestaurante';
import EditarRestaurante from './pages/EditarRestaurante';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  const cerrarSesion = () => {
    
  };

  return (
<BrowserRouter>
      <div>
        <Navbar cerrarSesion={cerrarSesion} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
          <Route path="/restaurantes/agregar" element={<AgregarRestaurante />} />
          <Route path="/restaurantes/editar/:id" element={<EditarRestaurante />} />
          <Route path="/restaurantes/:restauranteId/productos" element={<Productos />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/registrarse/:id" element={<Registrarse />} />
          <Route path="*" element={<NoExiste />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
