const express = require('express')
const {connection} = require("./config/DB")
const restaurantes = require("./routes/restaurantes")
const productos = require("./routes/productos")
const cors = require('cors')
const morgan = require('morgan')
const compression = require('compression')

const app = express();
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())

const port = process.env.PORT;

app.use("/",restaurantes,productos)
app.use(compression())

app.get("/", (req,res)=>{
    console.log('bienvenidos a mi api')
    res.send('Bienvenido')
})

connection.connect((err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log("Conectado a mi db")
    }
    
})

app.listen(port,()=>{
    console.log("Escuchando en el puerto" + port);
})