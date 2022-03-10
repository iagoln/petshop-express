var express = require('express');
var router = express.Router();
const usuarioController = require("../controller/usuarioController")


router.get('/cadastro',usuarioController.cadastro )
router.post('/cadastro', usuarioController.cadastroUsuario)
router.get('/login',usuarioController.login )
router.get('/contato',usuarioController.contato )
router.get('/sobre',usuarioController.sobre )
router.post('/login',usuarioController.logar)
module.exports = router;
