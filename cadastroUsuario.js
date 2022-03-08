const bcrypt = require('bcrypt');

const saltRounds = 10;

function cadastraUsuario(login,senha){
//Vamo utilizar quando estamos criando usuario
//---------cria a hash da senha informada
const hash = bcrypt.hashSync(senha, saltRounds);
console.log(hash)
//--------------------
}

cadastraUsuario("iago","senha123")