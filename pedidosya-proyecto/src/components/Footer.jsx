import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="contenedor-pie">
      <div className="contenido-pie">
        <div className="logo-pie">Pedidos Ya</div>
        
        <div className="redes-sociales-pie">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div className="disclaimer-pie">
        © {new Date().getFullYear()} Pedidos Ya - Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;