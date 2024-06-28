const express = require('express')
const {connection} = require("./config/DB")

const restaurantes = require("./routes/restaurantes")
const productos = require("./routes/productos")

const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;

app.use("/",restaurantes,productos)

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