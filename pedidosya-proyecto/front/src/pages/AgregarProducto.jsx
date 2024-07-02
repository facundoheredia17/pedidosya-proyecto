import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import "./AgregarRestaurante.css";

const AgregarProducto = () => {
  const { restauranteId } = useParams();
  const initialState = {
    nombre: "",
    precio: 0.0,
    descripcion: "",
    imagen: "",
    id_restaurante:restauranteId
  };
  const [datosForm, setDatosForm] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(`http://localhost:8000/restaurantes/${restauranteId}/productos/agregar`, {
        nombre: datosForm.nombre,
        precio: datosForm.precio,
        descripcion: datosForm.descripcion,
        imagen: datosForm.imagen,
        id_restaurante:restauranteId,
      });
      if (response) {
        alert("Producto agregado exitosamente");
        navigate(`/restaurantes/${restauranteId}/productos/`);
      } else {
        alert("Ha ocurrido un error");
      }
    } catch (error) {
      console.error("Error al crear producto", error);
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
          <h2>Agregar producto</h2>
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
              <label htmlFor="direccion">Precio:</label>
              <input
                type="text"
                id="precio"
                name="precio"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grupo-form">
              <label htmlFor="logo">Descripción:</label>
              <input
                type="text"
                id="descripcion"
                name="descripcion"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grupo-form">
              <label htmlFor="logo">Imagen:</label>
              <input
                type="text"
                id="imagen"
                name="imagen"
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

export default AgregarProducto;
