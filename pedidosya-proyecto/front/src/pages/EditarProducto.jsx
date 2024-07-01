import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form, FormControl } from "react-bootstrap";
import axios from "axios";

const EditarProducto = () => {
  const { restauranteId, id } = useParams();
  const navigate = useNavigate();
  
  const initialState = {
    nombre: "",
    precio: 0.0,
    descripcion: "",
    id_restaurante: restauranteId,
    imagen: "",
  };
  const [producto, setProducto] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.put(
        `http://localhost:8000/productos/${restauranteId}/productos/editar/${id}`,
        {
          nombre: producto.nombre,
          precio: producto.precio,
          descripcion: producto.descripcion,
          id_restaurante: restauranteId,
          imagen: producto.imagen,
        }
      );
      if (response.status == 200) {
        alert("Producto actualizado correctamente");
        navigate(`/restaurantes/${restauranteId}/productos/`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const getProducto = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8000/productos/${restauranteId}/productos/${id}`
      );
      if (response.status == 200) {
        setProducto(response.data);
      }
    } catch (error) {
      console.error("Error al obtener producto: ", error);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="pagina-agregar-restaurante">
        <div className="contenedor-formulario">
          <h2>Editar Producto</h2>
          <Form onSubmit={handleSubmit}>
            <p>Nombre:</p>
            <FormControl
              className="grupo-form"
              type="text"
              value={producto.nombre}
              onChange={handleChange}
              name="nombre"
              required
            />
            <p>Precio:</p>
            <FormControl
              className="grupo-form"
              type="text"
              value={producto.precio}
              onChange={handleChange}
              name="precio"
              required
            />
            <p>Descripcion:</p>
            <FormControl
              className="grupo-form"
              type="text"
              value={producto.descripcion}
              onChange={handleChange}
              name="descripcion"
              required
            />
            <p>imagen:</p>
            <FormControl
              className="grupo-form"
              type="text"
              value={producto.imagen}
              onChange={handleChange}
              name="imagen"
              required
            />

            <button type="submit" className="boton-agregar">
              Actualizar
            </button>
            <Link to={`/restaurantes/${restauranteId}/productos`} className="btn btn-info ml-4">
              Cancelar
            </Link>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditarProducto;
