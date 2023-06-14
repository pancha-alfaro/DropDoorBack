//Importa el module opinionModel para que podamos tener acceso a su estructura y funcionalidad mediante la variable opinionModel.
const opinionModel = require("../models/opinionModel");


//Recupera a todos los usuarios usando opinionModel, mandándolos como una respuesta JSON, y se ocupa de errores potenciales.
exports.getAllOpinions = (req, res) => {
    opinionModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({error:err.message}));
};

//Extrae data del request body, crea y guarda un new user usando opinionModel, y mande una respuesta JSON con el resultado del request.
exports.createOpinion =  (req, res) => {
    const {name, input} = req.body;
    const newOpinion = new opinionModel({
        name,
        input
    });

    newOpinion.save()
    .then(() => res.status(201).json({success:"created"}))
    .catch(err => res.status(500).json({error:err.message}));
}

//Actualiza la información del item en base a su id, y manda una respuesta JSON con la actualización o un error. 
exports.updateOpinion = (req, res) => {
    const {id}= req.params;
    const { name, input } = req.body;
    opinionModel.findByIdAndUpdate( id , { name, input }, {new:true})
    .then(user => {
        if(!user)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({user});
    })
    .catch(err => res.status(404).json({error:err.message}));
}

//Borra un item en base a su id, y manda una respuesta JSON con el resultado del request.
exports.deleteOpinion = (req, res) => {
    const {id}= req.params;
    opinionModel.findByIdAndDelete(id)
    .then(user => {
        if(!user)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({message:"Item deleted"});
    })
    .catch(err => res.status(404).json({error:err.message}));
}