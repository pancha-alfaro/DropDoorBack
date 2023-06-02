//Se guarda en la constante express la libreria express
const express = require("express");
const cors = require('cors');

//Se guardan en la constante app todos los metodos de la libreria express
const app = express();

//Creación de la constante puerto
const port = 4000;


//creacion de la constante userRoutes y productsRoutes
const userRoutes = require("./routes/userRoutes");
const productsRoutes = require("./routes/productsRoutes");

//Se agrega middleware para habilitar el análisis y conversion de data JSON en requests.
app.use(express.json());
app.use(cors());

//ruta para acceso a la información de la base de datos
app.use('/api/users', userRoutes);
app.use('/api/products', productsRoutes);

//Se empieza un servidor en el puerto especificado y se hace un log con un mensaje que contiene la URL del servidor.
app.listen(port, () => {console.log("El servidor se ejecuta en http://localhost:" + port)})
