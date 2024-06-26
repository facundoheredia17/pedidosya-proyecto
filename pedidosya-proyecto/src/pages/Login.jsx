import React, { useState } from 'react';
import './Login.css';

const Login = ({ cambiarPagina, setAutenticado }) => {
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

    const usuarioValido = usuariosValidos.find(
      (usuario) => usuario.email === email && usuario.password === password
    );

    if (usuarioValido) {
      localStorage.setItem('autenticado', 'true');
      setAutenticado(true);
      cambiarPagina('home');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
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
        <button type="submit" className="boton-inicio-sesion">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
