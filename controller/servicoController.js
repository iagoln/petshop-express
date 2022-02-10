let modelServico = require("../model/servico.json")

const servicoController = {
    listaServicos:(req,res)=>{
        res.send(modelServico);
    },
}

module.exports = servicoController