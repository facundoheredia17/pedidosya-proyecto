import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Restaurantes.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { URL_RESTAURANTES, URL_RESTAURANTES_ELIMINAR } from "../../constants/constantes";

const Restaurantes = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const getRestaurantes = async () => {
    let response = await axios.get(URL_RESTAURANTES);
    setRestaurantes(response.data);
  };

  const handleChange = async(id) =>{
    console.log(id)
    let response = await axios.delete(URL_RESTAURANTES_ELIMINAR+id);
    if(response){
      alert("Contacto eliminado correctamente");
      getRestaurantes();
    }
  }

  useEffect(() => {
    getRestaurantes();
  }, []);

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
              <Link
                to={`/restaurantes/${restaurantes.id}/productos`}
                className="btn btn-info"
              >
                Ver Productos
              </Link>
              <Link to={`/restaurantes/editar/${restaurantes.id}`} className="btn btn-success">
                Editar Restaurante
              </Link>
              <button to="/restaurantes/eliminar" className="btn btn-danger" onClick={()=>handleChange(restaurantes.id)}>
                Eliminar Restaurante
              </button>
            </div>
          </div>
        ))}
        <div className="boton-agregar-restaurante-container">
          <Link
            to="/restaurantes/agregar"
            className="boton-agregar-restaurante"
          >
            Agregar Restaurante
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurantes;
