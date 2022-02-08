let modelServico = require("../model/servico.json")

const petsController = {
    listaServicos:(req,res)=>{
        res.send(modelServico);
    },
    

}

module.exports = petsController