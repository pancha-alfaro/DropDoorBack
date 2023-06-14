//Se guarda en la constante express la libreria express
const express = require("express");

//Se instancia router con Express router para definir y manejar rutas para la app. 
const router = express.Router();

//importar el userController
const opinionsController = require("../controllers/opinionsController");

//Se define una ruta GET con path ("/"), que invoca funcion getAllItems de opinionsController. 
router.get('/', opinionsController.getAllOpinions);

//Se define una ruta POST con path ("/"), que invoca funcion createItem de opinionsController. 
router.post('/', opinionsController.createOpinion);

//Se define una ruta PUT con path ("/:id"), que invoca funcion updateItem de opinionsController en base a su id. 
router.put('/:id', opinionsController.updateOpinion);

//Se define una ruta DELETE con path ("/:id"), que invoca funcion deleteItem de opinionsController en base a su id. 
router.delete('/:id', opinionsController.deleteOpinion);

//Se exporta las rutas definidas haciendolas disponibles para ser usados en otras partes de la app. 
module.exports = router;