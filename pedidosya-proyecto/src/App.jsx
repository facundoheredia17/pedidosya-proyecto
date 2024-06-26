import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login'
import Restaurantes from './pages/Restaurantes';
import Pedidos from './pages/Pedidos';
import NoExiste from './components/NoExiste';
import Productos from './components/Productos'

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
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<NoExiste />} />
          <Route path="/productos" element={<Productos />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
