import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="contenedor-inicio">
        <div className="seccion-inicio">
          <h2 className="titulo-inicio">¡Bienvenido/a a nuestra aplicación de pedidos!</h2>
          <p className="descripcion-inicio">
            En nuestra plataforma podrás descubrir una variedad de restaurantes y productos deliciosos.
            Explora y realiza tu pedido con tan solo unos clics.
          </p>
          <Link to="/restaurantes" className="boton">Explorar Restaurantes</Link>
        </div>
        <div className="seccion-info">
          <h3 className="titulo">¿Cómo funciona?</h3>
          <p className="descripcion-info">
            Nuestra aplicación te permite navegar por diferentes restaurantes, ver sus productos,
            y agregar tus favoritos a tu pedido. Después, simplemente realiza el pago
            y espera la entrega en la comodidad de tu hogar.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
