const bcrypt = require('bcrypt');
const saltRounds = 10;
const bancoUser=[]

const usuarioController = {
    cadastro:(req,res)=>{
       res.render('cadastro') 
    },
    cadastroUsuario:(req,res)=>{
        const {nome,email,senha} = req.body
        const hash = bcrypt.hashSync(senha, saltRounds);
        const user = {id:Date.now() , nome:nome,senha:hash,email:email}
        bancoUser.push(user)
        res.send(bancoUser)
     },
    login:(req,res)=>{
        res.render('login') 
    },
    contato:(req , res)=>{
     res.render('contato')
    },
    sobre:(req , res)=>{
        res.render('usuario/sobre')
       }
}
module.exports= usuarioController