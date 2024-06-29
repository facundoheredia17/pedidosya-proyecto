import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AgregarRestaurante.css';

const AgregarRestaurante = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [logo, setLogo] = useState('');
  const navigate = useNavigate();

  const handleAgregar = () => {
    alert('Restaurante agregado exitosamente');
    // Asumiendo que el nuevo restaurante tiene un ID de 1 para este ejemplo
    navigate('/restaurantes/editar/1');
  };

  return (
    <>
      <Navbar />
      <div className="pagina-agregar-restaurante">
        <div className="contenedor-formulario">
          <h2>Agregar Restaurante</h2>
          <form>
            <div className="grupo-form">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="grupo-form">
              <label htmlFor="direccion">Dirección:</label>
              <input
                type="text"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
              />
            </div>
            <div className="grupo-form">
              <label htmlFor="logo">Logo:</label>
              <input
                type="text"
                id="logo"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
                required
              />
            </div>
            <button type="button" className="boton-agregar" onClick={handleAgregar}>
              Agregar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AgregarRestaurante;
