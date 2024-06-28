import React, { useState } from 'react';
import './Registrarse.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Registro = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', form);
  };

  return (
    <>
    <Navbar/>
    <div className="registro-contenedor">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grupo">
          <label htmlFor="nombre">Nombre:</label>
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
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-grupo">
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={form.direccion}
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
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="boton-enviar">Registrarse</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Registro;
