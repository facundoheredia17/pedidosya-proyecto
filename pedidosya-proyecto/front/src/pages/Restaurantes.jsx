import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Restaurantes.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { URL_RESTAURANTES } from '../../constants/constantes';

const Restaurantes = () => {

  const [restaurantes,setRestaurantes] = useState([])
  const getRestaurantes = async() =>{
    let response = await axios.get(URL_RESTAURANTES)
    console.log(response.data)
    setRestaurantes(response.data)
  }

  useEffect(()=>{
    getRestaurantes()
  },[])

  return (
    <>
      <Navbar />
      <div className="restaurantes-container pt-5">
        <h2>Restaurantes</h2>
        {restaurantes.map((restaurantes) => (
          <div key={restaurantes.id} className="restaurante-item">
            <img
              src={restaurantes.logo}
              alt={`Logo de ${restaurantes.nombre}`}
              className="restaurante-logo"
            />
            <div className="restaurante-info">
              <h3>{restaurantes.nombre}</h3>
              <p>{restaurantes.direccion}</p>
              <Link to={`/restaurantes/${restaurantes.id}/productos`} className="boton">
                Ver Productos
              </Link>
            </div>
          </div>
        ))}
        <div className="boton-agregar-restaurante-container">
          <Link to="/restaurantes/agregar" className="boton-agregar-restaurante">
            Agregar Restaurante
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurantes;
