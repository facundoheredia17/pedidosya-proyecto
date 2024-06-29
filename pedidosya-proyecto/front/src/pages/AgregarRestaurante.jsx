import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import "./AgregarRestaurante.css";
import {
  URL_RESTAURANTES_AGREGAR,
  URL_RESTAURANTES,
} from "../../constants/constantes";

const AgregarRestaurante = () => {
  const initialState = {
    nombre: "",
    direccion: "",
    logo: "",
  };
  const [datosForm, setDatosForm] = useState(initialState);
  //const [ultimoId, setUltimoId] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(URL_RESTAURANTES_AGREGAR, {
        nombre: datosForm.nombre,
        direccion: datosForm.direccion,
        logo: datosForm.logo,
      });
      //Validar Campos
      response
        ? alert("Restaurante agregado exitosamente")
        : alert("Ha ocurrido un error");
      // Conseguir el ID del ultimo restaurante agregado
      // console.log(response)
      // setUltimoId(response.data.id)
      // navigate(`/restaurantes/:${ultimoId}/productos`);
    } catch (error) {
      console.error("Error al crear restaurante");
    }
  };

  const handleChange = (e) => {
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="pagina-agregar-restaurante">
        <div className="contenedor-formulario">
          <h2>Agregar Restaurante</h2>
          <form onSubmit={handleSubmit}>
            <div className="grupo-form">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grupo-form">
              <label htmlFor="direccion">Dirección:</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grupo-form">
              <label htmlFor="logo">Logo:</label>
              <input
                type="text"
                id="logo"
                name="logo"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="boton-agregar">
              Agregar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AgregarRestaurante;
