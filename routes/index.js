var express = require('express');
var router = express.Router();
const consumoController = require("../controllers/consumoController");
const userController = require("../controllers/userController");

/* GET home page. */
router.get('/', function(req, res, next){

  res.render('fumaMenos/index');
  
});
router.get('/login', userController.login);
router.get('/registro', userController.registro);
router.post('/registro', userController.agregar);
router.post('/login', userController.comprobarUsuario);
router.get('/homeMenu', userController.menu);
router.get('/addConsumo', userController.mostrarFrmRegistro);
router.post('/addConsumo',userController.addC);
router.get('/consumos', userController.historial);
router.get('/report', userController.mostrarEstadiscticas);




module.exports = router;
