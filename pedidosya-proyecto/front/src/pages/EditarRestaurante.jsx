import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './EditarRestaurante.css';

const EditarRestaurante = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [restaurante, setRestaurante] = useState({
    nombre: 'Leno Barrio Norte',
    direccion: 'Virgen de la Merced 885',
    logo: '/lenologo.webp',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    alert('Restaurante editado exitosamente');
    setIsEditing(false);
  };

  const handleDelete = () => {
    alert('Restaurante borrado exitosamente');
    navigate('/restaurantes');
  };

  return (
    <>
      <Navbar />
      <div className="pagina-editar-restaurante">
        <div className="contenedor-restaurante">
          <h2>{isEditing ? 'Editar Restaurante' : 'Detalles del Restaurante'}</h2>
          <table className="tabla-restaurante">
            <thead>
              <tr>
                <th>Logo</th>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={restaurante.logo}
                    alt={`Logo de ${restaurante.nombre}`}
                    className="logo-restaurante"
                  />
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={restaurante.nombre}
                      onChange={(e) =>
                        setRestaurante({ ...restaurante, nombre: e.target.value })
                      }
                    />
                  ) : (
                    restaurante.nombre
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={restaurante.direccion}
                      onChange={(e) =>
                        setRestaurante({ ...restaurante, direccion: e.target.value })
                      }
                    />
                  ) : (
                    restaurante.direccion
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <button className="boton-guardar" onClick={handleSave}>
                      Guardar
                    </button>
                  ) : (
                    <>
                      <button className="boton-ver" onClick={() => alert('Ver detalles')}>
                        Ver
                      </button>
                      <button className="boton-editar" onClick={handleEdit}>
                        Editar
                      </button>
                      <button className="boton-borrar" onClick={handleDelete}>
                        Borrar
                      </button>
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditarRestaurante;
