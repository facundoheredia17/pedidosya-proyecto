import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form, FormControl } from "react-bootstrap";
import "./EditarRestaurante.css";
import axios from "axios";
import { URL_RESTAURANTES, URL_RESTAURANTES_EDITAR } from "../../constants/constantes";

const EditarRestaurante = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    nombre:"",
    direccion:"",
    logo:""
  }
  const [restaurante, setRestaurante] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.put(URL_RESTAURANTES_EDITAR + id,{
        nombre:restaurante.nombre,
        direccion:restaurante.direccion,
        logo:restaurante.logo
      });
      if (response.status == 200) {
        alert("Restaurante actualizado correctamente");
        navigate("/restaurantes");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setRestaurante({...restaurante,[e.target.name]:e.target.value})
  }

  const getRestaurante = async () => {
    let response = await axios.get(URL_RESTAURANTES + id);
    console.log(response.data);
    if (response.status == 200) {
      setRestaurante(response.data[0]);
    }
  };

  useEffect(() => {
    getRestaurante();
  }, []);
  return (
    <>
      <Navbar />
      <div className="pagina-agregar-restaurante">
        <div className="contenedor-formulario">
          <h2>Editar Restaurante</h2>
          <Form onSubmit={handleSubmit}>
            <p >Nombre:</p>
            <FormControl
              className="grupo-form"
              type="text"
              value={restaurante.nombre}
              onChange={handleChange}
              name="nombre"
              required
            />
            <p >Dirección:</p>
            <FormControl
              className="grupo-form"
              type="text"
              value={restaurante.direccion}
              onChange={handleChange}
              name="direccion"
              required
            />
            <p>Logo:</p>
            <FormControl
              className="grupo-form"
              type="text"
              value={restaurante.logo}
              onChange={handleChange}
              name="logo"
              required
            />

            <button type="submit" className="boton-agregar">
              Actualizar
            </button>
            <Link to='/restaurantes/' className="btn btn-info ml-4">
              Cancelar
            </Link>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditarRestaurante;
