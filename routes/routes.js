const router = require('express').Router();
const CantuniaController = require('../controllers/CantuniaController');
const FatherController = require('../controllers/FatherController');

// Rutas Cantunia
// Ruta para añadir un nuevo registro
router.post('/cantunia/add', CantuniaController.addCantunia);

// Ruta para eliminar un registro por ID
router.delete('/cantunia/:id', CantuniaController.deleteCantunia);

// Ruta para obtener todos los datos
router.get('/cantunia/all', CantuniaController.getAllCantunia);

//Rutas Father
// Ruta para añadir un nuevo registro
router.post('/father/add', FatherController.addFather);

// Ruta para eliminar un registro por ID
router.delete('/father/:id', FatherController.deleteFather);

// Ruta para obtener todos los datos
router.get('/father/all', FatherController.getAllFather);

module.exports = router;
