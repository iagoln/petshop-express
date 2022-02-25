var express = require('express');
var router = express.Router();
const multer = require('multer')
const servicoController = require("../controller/servicoController")
const validaCadastro = require("../middleware/validaCadastroServicoMiddleware")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './fotoServico')
    },
    filename: function (req, file, cb) { 
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage:storage });

router.get('/',servicoController.index)
router.get('/cadastroget',servicoController.criarServicoGet)

router.post('/cadastroservico',validaCadastro ,servicoController.criarServico)
router.get('/servico',servicoController.listaServicos)
router.get('/servicoid/:id', servicoController.testeparams)
router.get('/cadastro', servicoController.cadastroServico)
module.exports = router