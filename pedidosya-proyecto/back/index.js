const express = require('express');
const { connection } = require('./config/db');
const restaurantesRouter = require('./routes/restaurantes');
const productosRouter = require('./routes/productos');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const usuariosRouter = require('./routes/usuarios');
const iniciarSesionRouter = require('./routes/iniciarsesion');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(compression());

const port = process.env.PORT || 8000;

app.use('/productos', productosRouter);
app.use('/restaurantes', restaurantesRouter);
app.use('/usuarios', usuariosRouter);
app.use('/usuarios', iniciarSesionRouter);

app.get('/', (req, res) => {
  console.log('Bienvenidos a mi API');
  res.send('Bienvenido');
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Conectado a mi db');
  }
});

app.listen(port, () => {
  console.log('Escuchando en el puerto: ' + port);
});
