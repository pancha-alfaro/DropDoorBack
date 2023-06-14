//Se importa la libreria Mongoose. 
const mongoose = require("mongoose");


//Variable Uri almacena la string conection a la base de datos de MongoDB. 
const Uri = "mongodb+srv://panchaalfaroh:MPo5CU9ig2FDhE0J@users.lialtqx.mongodb.net/Users";

//Se establece la conección a la base de datos, y se hace un log en la consola si es que tuvo exito o si hay algun error. 
mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos"))
.catch(err => console.log("Error de conexion con la base de datos", err));


//Se crea un Schema detallando sus propiedades y sus respectivos tipos. 
const opinionSchema = new mongoose.Schema({
    name: {type:String},
    input: {type:String}
});

//Código que nos permite exportar el model 'Products' en base a productSchema. Permitiendo la interacción de 'Products' con la base de datos. 
module.exports = mongoose.model('Opinions', opinionSchema);