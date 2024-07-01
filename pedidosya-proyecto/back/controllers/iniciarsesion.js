const { connection } = require('../config/db');

const iniciarSesion = (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT nombre FROM usuarios WHERE email = ? AND clave = ?';
  connection.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error en el servidor' });
    }

    if (results.length > 0) {
      const usuario = results[0];
      return res.status(200).json({ mensaje: 'Autenticado', nombre: usuario.nombre });
    } else {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  });
};

module.exports = {
  iniciarSesion,
};
