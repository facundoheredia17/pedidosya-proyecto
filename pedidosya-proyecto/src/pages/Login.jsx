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
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Email/Teléfono:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
