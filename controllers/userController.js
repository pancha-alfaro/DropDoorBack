//Importa el module userModel para que podamos tener acceso a su estructura y funcionalidad mediante la variable userModel.
const userModel = require("../models/userModel");


//Recupera a todos los usuarios usando userModel, mandándolos como una respuesta JSON, y se ocupa de errores potenciales.
exports.getAllUsers = (req, res) => {
    userModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({error:err.message}));
};

//Extrae data del request body, crea y guarda un new user usando userModel, y mande una respuesta JSON con el resultado del request.
exports.createUser =  (req, res) => {
    const {name, email, password, cellphone, address} = req.body;
    const newUser = new userModel({
        name,
        email,
        password,
        cellphone,
        address,
    });

    newUser.save()
    .then(() => res.status(201).json({success:"created"}))
    .catch(err => res.status(500).json({error:err.message}));
}

//Actualiza la información del usuario en base a su id, y manda una respuesta JSON con la actualización o un error. 
exports.updateUser = (req, res) => {
    const {id}= req.params;
    const { username, email, password } = req.body;
    userModel.findByIdAndUpdate( id , { username, email, password }, {new:true})
    .then(user => {
        if(!user)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({user});
    })
    .catch(err => res.status(404).json({error:err.message}));
}

//Borra a un usuario en base a su id, y manda una respuesta JSON con el resultado del request.
exports.deleteUser = (req, res) => {
    const {id}= req.params;
    userModel.findByIdAndDelete(id)
    .then(user => {
        if(!user)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({message:"User deleted"});
    })
    .catch(err => res.status(404).json({error:err.message}));
}