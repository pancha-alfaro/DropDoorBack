//Se guarda en la constante express la libreria express
const express = require("express");


//Se guardan en la constante app todos los metodos de la libreria express
const app = express();

//Creacion de la constante puerto
const port = 4000;

//creacion de la constante connectDB

//creacion de la constante userRoutes
const userRoutes = require("./routes/userRoutes");


app.use(express.json());

//ruta para acceso a la infornacion de la base de datos

app.use('/api/users', userRoutes);

app.listen(port, () => {console.log("El servidor se ejecuta en http://localhost:" + port)})
