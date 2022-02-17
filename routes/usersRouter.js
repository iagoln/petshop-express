var express = require('express');
var router = express.Router();
const usuarioController = require("../controller/usuarioController")


router.get('/cadastro',usuarioController.cadastro )
router.get('/login',usuarioController.login )
router.get('/contato',usuarioController.contato )

module.exports = router;
