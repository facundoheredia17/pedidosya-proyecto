import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login'
import Restaurantes from './pages/Restaurantes';
import Pedidos from './pages/Pedidos';
import NoExiste from './components/NoExiste';
import Productos from './components/Productos';
import Registrarse from './pages/Registrarse';
import AgregarRestaurante from './components/AgregarRestaurante';
import EditarRestaurante from './components/EditarRestaurante';
import VerRestaurante from './components/VerRestaurante';
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
          <Route path="/restaurantes/agregar" element={<AgregarRestaurante/>} />
          <Route path="/restaurantes/editar/:id" element={<EditarRestaurante/>} />
          <Route path="/restaurantes/ver" element={<VerRestaurante />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/productos/:restauranteId" element={<Productos />}/>
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/registrarse/:id" element={<Registrarse />} />
          <Route path="*" element={<NoExiste />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
