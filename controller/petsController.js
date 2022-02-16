let modelPets = require("../model/pets.json")
const { exibeServico } = require("./servicoController")

const petsController = {
    listaPets:(req,res)=>{
        console.log(res.send(modelPets))
    },
    exibePet:(req,res)=>{
        res.render('cadastroPets')
    },
    cadastraPets:(req,res)=>{
        let pet = req.body
        modelPets.push(pet)
        //Criar a view de exiber pets
        res.send(modelPets)
    }
}

module.exports = petsController