import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Pedidos.css';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const getPedidos = async () => {
    let response = await axios.get('http://localhost:8000/pedidos/');
    const revertirPedidos = response.data.reverse();
    setPedidos(revertirPedidos);
  };

  useEffect(() => {
    getPedidos();
  }, []);


  return (
    <>
      <Navbar />
      <div className="pedidos-container">
        <h2 className="pedidos-titulo">Pedidos</h2>
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="pedido-card">
            <h3 className="nombre-restaurante">Restaurante: {pedido.nombre_restaurante}</h3>
            
            <p>
              Estado: {pedido.estado}
            </p>
            <p className="total-pedido">Total: ${pedido.total}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Pedidos;
