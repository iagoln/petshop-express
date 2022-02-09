var express = require('express');
var router = express.Router();
const petsController = require("../controller/petsController")
const usuarioController = require("../controller/usuarioController")

/* GET home page. */
router.get('/', function(req, res, ) {
  res.render('index', { title: 'Aula 04/02' });
});
// errado
// router.get('/servico', function(req, res ) {
//   res.send(modelServico);
// });
// correto
router.get('/servico',petsController.listaServicos );
router.get('/pets',petsController.listaPets)
router.get('/cadastro',usuarioController.cadastro )

module.exports = router;
