const mongoose = require("mongoose");

const Uri = "mongodb+srv://panchaalfaroh:MPo5CU9ig2FDhE0J@users.lialtqx.mongodb.net/Users";

mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos"))
.catch(err => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String},
    password: {type:String},
    cellphone: {type:Number},
    address: {type:String},
    age: {type:Number}
});

module.exports = mongoose.model('Usuarios', userSchema);