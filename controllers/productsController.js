//Importa el module productsModel para que podamos tener acceso a su estructura y funcionalidad mediante la variable productsModel.
const productsModel = require("../models/productsModel");


//Recupera a todos los usuarios usando productsModel, mandándolos como una respuesta JSON, y se ocupa de errores potenciales.
exports.getAllItems = (req, res) => {
    productsModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({error:err.message}));
};

//Extrae data del request body, crea y guarda un new user usando productsModel, y mande una respuesta JSON con el resultado del request.
exports.createItem =  (req, res) => {
    const {name, price, restaurant} = req.body;
    const newProduct = new productsModel({
        name,
        price,
        restaurant
    });

    newProduct.save()
    .then(() => res.status(201).json({success:"created"}))
    .catch(err => res.status(500).json({error:err.message}));
}

//Actualiza la información del item en base a su id, y manda una respuesta JSON con la actualización o un error. 
exports.updateItem = (req, res) => {
    const {id}= req.params;
    const { name, price, restaurant } = req.body;
    productsModel.findByIdAndUpdate( id , { name, price, restaurant }, {new:true})
    .then(user => {
        if(!user)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({user});
    })
    .catch(err => res.status(404).json({error:err.message}));
}

//Borra un item en base a su id, y manda una respuesta JSON con el resultado del request.
exports.deleteItem = (req, res) => {
    const {id}= req.params;
    productsModel.findByIdAndDelete(id)
    .then(user => {
        if(!user)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({message:"Item deleted"});
    })
    .catch(err => res.status(404).json({error:err.message}));
}