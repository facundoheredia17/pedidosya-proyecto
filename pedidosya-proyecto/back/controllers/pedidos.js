const { connection } = require("../config/db");

const mostrarPedidos = (req, res) => {
  const query = `SELECT p.*, r.nombre as nombre_restaurante 
  from pedidos p  
  inner join restaurantes r on p.id_restaurante = r.id`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const unPedido = (req, res) => {
  const id = req.params.id;
  const query = `SELECT p.*,
  r.nombre as nombre_restaurante FROM pedidos p
  INNER JOIN restaurantes r ON p.id_restaurante =r.id
  WHERE p.id=${id}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const crearPedido = (req, res) => {
  const { id_restaurante, total, estado } = req.body;
  const query = `INSERT INTO pedidos (id_restaurante, total, estado) 
  VALUES (${id_restaurante},'${total}', '${estado}')`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
};

module.exports = {
  mostrarPedidos,
  unPedido,
  crearPedido,
};
