var express = require('express');
var router = express.Router();
const petsController = require("../controller/petsController")
const usuarioController = require("../controller/usuarioController")
const servicoController = require("../controller/servicoController")
const indexController = require("../controller/indexController")

/* GET home page. */
router.get('/iago/:aula?', function(req, res, ) {
if(req.params.aula){
  
}
  res.send( { title: req.params });
});
// errado
// router.get('/servico', function(req, res ) {
//   res.send(modelServico);
// });
// correto
router.get('/servico',servicoController.listaServicos );
router.get('/pets',petsController.listaPets)

router.get('/cadastro',usuarioController.cadastro )
router.get('/login',usuarioController.login )
router.get('/contato',usuarioController.contato )
router.get('/',indexController.index)
router.get('/cadastroservico',servicoController.exibeServico)

router.post('/cadastroservico',servicoController.criarServico)

module.exports = router;
