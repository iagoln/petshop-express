let modelPets = require("../model/pets.json")

const petsController = {
    index:(req,res)=>{
        res.render('cadastroPets')
    },
    listaPets:(req,res)=>{
        console.log(res.send(modelPets))
    },
    cadastraPets:(req,res)=>{
        let pet = req.body
        modelPets.push(pet)
        //Criar a view de exiber pets
        res.send(modelPets)
    }
}

module.exports = petsController