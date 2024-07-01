const { connection } = require("../config/DB");

const todosProductos = (req, res) => {
  const id_restaurante = req.params.id_restaurante;
  console.log(id_restaurante);
  const query = `select * from productos where id_restaurante=${id_restaurante}`;
  connection.query(query, (err, results) => {
    if (err) {
        console.error("Error al obtener todos los productos:", err);
        res.status(500).json({ error: "Error al obtener todos los productos del servidor" });
      } else {
        res.json(results);
      }
  });
};

const unProducto = (req, res) => {
  const id_restaurante = req.params.id_restaurante;
  const id = req.params.id;
  const query = `select * from productos where id=${id} and id_restaurante=${id_restaurante}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

const crearProducto = (req, res) => {
  const id_restaurante = req.params.id_restaurante;
  const { nombre, precio, descripcion, imagen } = req.body;
  const query = `insert into productos (nombre, precio, descripcion, imagen, id_restaurante) values ('${nombre}', ${precio}, '${descripcion}', '${imagen}', ${id_restaurante})`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const editarProducto = (req, res) => {
  const id_restaurante = req.params.id_restaurante;
  const id = req.params.id;
  const { nombre, precio, descripcion, imagen } = req.body;
  const query = `update productos set nombre='${nombre}', precio=${precio}, descripcion='${descripcion}', imagen='${imagen}', id_restaurante=${id_restaurante} where id=${id} and id_restaurante=${id_restaurante}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const borrarProducto = (req, res) => {
  const id_restaurante = req.params.id_restaurante;
  const id = req.params.id;
  const query = `delete from productos where id=${id} and id_restaurante=${id_restaurante}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

module.exports = {
  todosProductos,
  unProducto,
  crearProducto,
  editarProducto,
  borrarProducto,
};
