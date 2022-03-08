const hashBanco ='$2b$10$lE/BF5/dcYZLWi75Tm/dY.wiVhT1gdoZkFtqVCR9SZCtu.MIGqMxi'
const bcrypt = require('bcrypt');


function logar(login,senha){


//---------Quando o usuario tenta fazer o login

//compara a senha com o hash salvo no banco
const resultado = bcrypt.compareSync(senha,hashBanco)
 console.log(resultado)
}

logar("iago","senha12")