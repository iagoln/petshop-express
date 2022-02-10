const servicos = require('../model/servico.json')

const indexController = {
    index: (req, res) => {
        //res.send(servicos)

        res.render('index',{listaServicos:servicos})
    }
}

module.exports = indexController