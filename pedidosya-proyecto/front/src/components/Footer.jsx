import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="contenedor-pie mt-5">
      <div className="contenido-pie">
        <div className="logo-pie">Pedidos Ya</div>
        
        <div className="redes-sociales-pie">
          <a href="https://www.facebook.com/pedidosya/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/pedidosya/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/pedidosya/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="disclaimer-pie">
        © {new Date().getFullYear()} Pedidos Ya - Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;