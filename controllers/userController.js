const userModel = require("../models/userModel");

exports.getAllUsers = (req, res) => {
    userModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({error:err.message}));
};

exports.createUser =  (req, res) => {
    const {name, email, password, cellphone, adress, age} = req.body;
    const newUser = new userModel({
        name,
        email,
        password,
        cellphone,
        adress,
        age
    });

    newUser.save()
    .then(() => res.status(201).json({success:"created"}))
    .catch(err => res.status(500).json({error:err.message}));
}

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

exports.deleteUser = (req, res) => {
    const {id}= req.params;
    userModel.findByIdAndDelete(id)
    .then(user => {
        if(!user)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({message:"User deleted"});
    })
    .catch(err => res.status(404).json({error:err.message}));
}