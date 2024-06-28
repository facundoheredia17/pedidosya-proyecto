const { connection } = require("../config/DB");

const todosRestaurantes = (req, res) => {
  const query = "select * from restaurantes";
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const unRestaurante = (req, res) => {
  const id = req.params.id;
  const query = `select * from restaurantes where id=${id}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
  console.log(req);
};

const crearRestaurante = (req, res) => {
  const { nombre, direccion, logo } = req.body;
  const query = `insert into restaurantes (nombre,direccion,logo) values ('${nombre}','${direccion}','${logo}')`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const editarRestaurante = (req, res) => {
  const id = req.params.id;
  const { nombre, direccion, logo } = req.body;
  const query = `update restaurantes set nombre='${nombre}', direccion='${direccion}',logo='${logo}' where id=${id}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const borrarRestaurante = (req, res) => {
  const id = req.params.id;
  const query = `delete from restaurantes where id=${id}`;
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
