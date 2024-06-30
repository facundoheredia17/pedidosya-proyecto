// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import axios from "axios";
// import { URL_RESTAURANTES_AGREGAR } from "../../constants/constantes";
// import "./AgregarRestaurante.css";

// const AgregarProducto = () => {
//   const { idRestaurante } = useParams();
//   console.log('el id es '+idRestaurante)
//   const initialState = {
//     nombre: "",
//     precio: 0.0,
//     descripcion: "",
//     imagen: "",
//     id_restaurante:id
//   };
//   const [datosForm, setDatosForm] = useState(initialState);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response = await axios.post(URL_RESTAURANTES+idRestaurante, {
//         nombre: datosForm.nombre,
//         direccion: datosForm.direccion,
//         logo: datosForm.logo,
//       });
//       if (response) {
//         alert("Restaurante agregado exitosamente");
//         navigate("/restaurantes");
//       } else {
//         alert("Ha ocurrido un error");
//       }
//     } catch (error) {
//       console.error("Error al crear restaurante", error);
//     }
//   };

//   const handleChange = (e) => {
//     setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="pagina-agregar-restaurante">
//         <div className="contenedor-formulario">
//           <h2>Agregar Restaurante</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="grupo-form">
//               <label htmlFor="nombre">Nombre:</label>
//               <input
//                 type="text"
//                 id="nombre"
//                 name="nombre"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="grupo-form">
//               <label htmlFor="direccion">Dirección:</label>
//               <input
//                 type="text"
//                 id="direccion"
//                 name="direccion"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="grupo-form">
//               <label htmlFor="logo">Logo:</label>
//               <input
//                 type="text"
//                 id="logo"
//                 name="logo"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="boton-agregar">
//               Agregar
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AgregarProducto;
