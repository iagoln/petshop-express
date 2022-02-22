var express = require('express');
var router = express.Router();
const servicoController = require("../controller/servicoController")

router.get('/',servicoController.index)
router.get('/cadastroget',servicoController.criarServicoGet)
router.post('/cadastroservico',servicoController.criarServico)
router.get('/servico',servicoController.listaServicos)
router.get('/servicoid/:id', servicoController.testeparams)
module.exports = router