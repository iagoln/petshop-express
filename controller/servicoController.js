const { redirect } = require("express/lib/response");
let modelServico = require("../model/servico.json")

const servicoController = {
    listaServicos:(req,res)=>{
        res.send(modelServico);
    },
    criarServico:(req,res)=>{
        console.log(req.body)

        res.redirect('/')
    },
       
    exibeServico:(req,res)=>{
        res.render('cadastro')
    }
}

module.exports = servicoController