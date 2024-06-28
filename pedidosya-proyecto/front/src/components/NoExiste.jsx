import React from 'react';
import './NoExiste.css';
import Navbar from './Navbar';
import Footer from './Footer';

const NoExiste = () => {
  return (
    <>
    <Navbar/>
    <div className="contenedor-error">
      <h3 className="titulo-error">Página Inexistente</h3>
      <img className="imagen-error" src="https://thumbs.dreamstime.com/b/l%C3%ADnea-plana-concepto-de-la-p%C3%A1gina-errores-v%C3%ADnculo-una-inexistente-l%C3%ADneas-puntos-y-objetos-abstractos-ilustraci%C3%B3n-del-vector-119892206.jpg" alt="Error 404" />
      <a className="enlace-inicio" href="/">Volver a la página de Inicio</a>
    </div>
    <Footer/>
    </>
  )
}

export default NoExiste;
