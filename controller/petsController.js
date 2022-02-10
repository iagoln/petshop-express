let modelPets = require("../model/pets.json")

const petsController = {
    listaPets:(req,res)=>{
        console.log(res.send(modelPets))
    }
}

module.exports = petsController