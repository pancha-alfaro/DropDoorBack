//Se guarda en la constante express la libreria express
const express = require("express");

//Se instancia router con Express router para definir y manejar rutas para la app. 
const router = express.Router();

//importar el userController
const productsController = require("../controllers/productsController");

//Se define una ruta GET con path ("/"), que invoca funcion getAllItems de productsController. 
router.get('/', productsController.getAllItems);

//Se define una ruta POST con path ("/"), que invoca funcion createItem de productsController. 
router.post('/', productsController.createItem);

//Se define una ruta PUT con path ("/:id"), que invoca funcion updateItem de productsController en base a su id. 
router.put('/:id', productsController.updateItem);

//Se define una ruta DELETE con path ("/:id"), que invoca funcion deleteItem de productsController en base a su id. 
router.delete('/:id', productsController.deleteItem);

//Se exporta las rutas definidas haciendolas disponibles para ser usados en otras partes de la app. 
module.exports = router;