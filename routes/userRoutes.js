//Se guarda en la constante express la libreria express
const express = require("express");

//Se instancia router con Express router para definir y manejar rutas para la app. 
const router = express.Router();

//importar el userController
const userController = require("../controllers/userController");

//Se define una ruta GET con path ("/"), que invoca funcion getAllUsers de userController. 
router.get('/', userController.getAllUsers);

//Se define una ruta POST con path ("/"), que invoca funcion createUser de userController. 
router.post('/', userController.createUser);

//Se define una ruta PUT con path ("/:id"), que invoca funcion updateUser de userController en base a su id. 
router.put('/:id', userController.updateUser);

//Se define una ruta DELETE con path ("/:id"), que invoca funcion deleteUser de userController en base a su id. 
router.delete('/:id', userController.deleteUser);

//Se exporta las rutas definidas haciendolas disponibles para ser usados en otras partes de la app. 
module.exports = router;