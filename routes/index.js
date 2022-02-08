var express = require('express');
var router = express.Router();
let modelServico = require("../model/servico.json")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aula 03/02' });
});
router.get('/servico', function(req, res, next) {
  res.send(modelServico);
});
module.exports = router;
