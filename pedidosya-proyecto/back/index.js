const express = require('express');
const { connection } = require("./config/DB");
const restaurantesRouter = require('./routes/restaurantes');
const productosRouter = require('./routes/productos');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(compression());

const port = process.env.PORT;

app.use("/restaurantes", restaurantesRouter);
app.use("/productos", productosRouter); 

app.get("/", (req, res) => {
    console.log('Bienvenidos a mi API');
    res.send('Bienvenido');
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Conectado a mi db");
    }
});

app.listen(port, () => {
    console.log("Escuchando en el puerto: " + port);
});