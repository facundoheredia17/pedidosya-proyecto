import React, { useState } from 'react';
import './MainLogin.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Login = ({ setAutenticado }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const usuariosValidos = [
    { email: 'facundoheredia951@gmail.com', password: '123456789' },
    { email: 'hsanchez95@gmail.com', password: '123456789' },
    { email: 'admin@pedidosya.com', password: 'adminpeya' },
    { email: '3816095123', password: '123456789' },
  ];

  const handleLogin = (event) => {
    event.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    const usuarioValido = usuariosValidos.find(
      (usuario) => usuario.email === email && usuario.password === password
    );

    if (usuarioValido) {
      console.log('Usuario válido');
      localStorage.setItem('autenticado', 'true');
      setAutenticado(true);
    } else {
      console.log('Credenciales incorrectas');
      alert('Credenciales incorrectas');
    }
  };

  return (
    <>
      <div className="contenedor-inicio-sesion">
        <form className="formulario-inicio-sesion" onSubmit={handleLogin}>
          <h2 className="titulo-inicio-sesion">Iniciar Sesión</h2>
          <div className="grupo-formulario">
            <label htmlFor="email">Email/Teléfono:</label>
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
          <Link to={'/home'} className="btn btn-registro">
            Iniciar Sesión
          </Link>
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
