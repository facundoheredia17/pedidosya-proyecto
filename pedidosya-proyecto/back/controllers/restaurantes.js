const { connection } = require('../config/DB');

const todosRestaurantes = (req, res) => {
  const query = 'SELECT * FROM restaurantes';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const unRestaurante = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM restaurantes WHERE id=${id}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const crearRestaurante = (req, res) => {
  const { nombre, direccion, logo } = req.body;
  const query = `INSERT INTO restaurantes (nombre, direccion, logo) VALUES ('${nombre}', '${direccion}', '${logo}')`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const editarRestaurante = (req, res) => {
  const id = req.params.id;
  const { nombre, direccion, logo } = req.body;
  const query = `UPDATE restaurantes SET nombre='${nombre}', direccion='${direccion}', logo='${logo}' WHERE id=${id}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const borrarRestaurante = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM restaurantes WHERE id=${id}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

module.exports = {
  todosRestaurantes,
  unRestaurante,
  crearRestaurante,
  editarRestaurante,
  borrarRestaurante,
};