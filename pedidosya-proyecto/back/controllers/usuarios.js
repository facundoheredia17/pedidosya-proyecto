const { connection } = require("../config/db");

const registrarUsuario = (req, res) => {
  const { nombre, email, clave } = req.body;
console.log(req.body);
    const query = `INSERT INTO usuarios (nombre, email, clave) VALUES ('${nombre}', '${email}', '${clave}')`;
    connection.query(query, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.send(results);
    });
};

const mostrarUsuarios = (req, res) => {
  const query = "SELECT * FROM usuarios";
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

module.exports = {
  registrarUsuario,
  mostrarUsuarios,
};
