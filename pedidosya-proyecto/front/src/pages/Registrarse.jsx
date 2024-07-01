import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Registrarse.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { URL_REGISTRARSE } from '../../constants/constantes';

const Registro = () => {
  const initialState = {
    nombre: '',
    email: '',
    clave: '',
    repetirclave: '',
  };
  const [form, setForm] = useState(initialState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL_REGISTRARSE, {
        nombre: form.nombre,
        email: form.email,
        clave: form.clave,
      });
      console.log(response);
      if (form.clave === form.repetirclave) {
        alert('Usuario registrado exitosamente');
        navigate('/home');
        alert(`Hola! ${form.nombre} `)
      } else {
        alert('Hubo un problema al registrar el usuario');
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Hubo un problema al registrar el usuario');
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="registro-contenedor">
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grupo">
            <label htmlFor="nombre">Nombre y Apellido:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grupo">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grupo">
            <label htmlFor="clave">Contraseña:</label>
            <input
              type="password"
              id="clave"
              name="clave"
              value={form.clave}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grupo">
            <label htmlFor="repetirclave">Reingresar Contraseña:</label>
            <input
              type="password"
              id="repetirclave"
              name="repetirclave"
              value={form.repetirclave}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="boton-enviar">Registrarse</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Registro;
