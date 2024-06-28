const { connection } = require("../config/DB");

const todosProductos = (req, res) => {
  const query = "select * from productos";
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const unProducto = (req, res) => {
  const id = req.params.id;
  const query = `select * from productos where id=${id}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
  console.log(req);
};

const crearProducto = (req, res) => {
  const { nombre, precio, descripcion } = req.body;
  const query = `insert into productos (nombre,precio,descripcion) values ('${nombre}',${precio},'${descripcion}')`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const editarProducto = (req, res) => {
  const id = req.params.id;
  const { nombre, precio, descripcion } = req.body;
  const query = `update productos set nombre='${nombre}', precio=${precio},descripcion='${descripcion}' where id=${id}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const borrarProducto = (req, res) => {
  const id = req.params.id;
  const query = `delete from productos where id=${id}`;
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
