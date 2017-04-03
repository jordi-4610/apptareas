var express = require('express');
var router = express.Router();

/* GET home page. */
var models = require('../models/models.js');

//findAll devuelve un array con el contenido de la BBDD



router.get('/', function(req, res, next) {
  models.Tbltareas.findAll().then( 
			function(tbltareas) {
				res.render('tareas', { tareas: tbltareas, errors: []});
}).catch(function(error) { console.log("Error");})
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'AppJordi'});
});

router.post('/crear' ,function(req, res, next) {
  var nom = req.body.nombre;
  var eti = req.body.etiquetas;
  var rea = req.body.realizacion;

  eti = eti.split(",");

  var add = {
  	 "nom": nom,
  	 "etiquetes": eti,
  	 "realització": rea
  }
  tareas.push(add);
  res.redirect('/tareas');
});

module.exports = router;