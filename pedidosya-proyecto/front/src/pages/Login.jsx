import React, { useState } from 'react';
import axios from 'axios';
import './MainLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { URL_LOGIN } from '../../constants/constantes';

const Login = ({ setAutenticado }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(URL_LOGIN, { email, password });
      if (response.status === 200) {
        setAutenticado();
        alert(`Usuario autenticado, bienvenido ${response.data.nombre}`);
        navigate('/home');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Credenciales incorrectas');
    }
  };

  return (
    <>
      <div className="contenedor-inicio-sesion">
        <form className="formulario-inicio-sesion" onSubmit={handleLogin}>
          <h2 className="titulo-inicio-sesion">Iniciar Sesión</h2>
          <div className="grupo-formulario">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grupo-formulario">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-registro">Iniciar Sesión</button>
          <Link to={'/registrarse'} className="btn btn-registro">
            Registrarse
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;