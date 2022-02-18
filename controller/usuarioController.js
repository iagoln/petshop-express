
const usuarioController = {
    cadastro:(req,res)=>{
       res.render('cadastro') 
    },
    login:(req,res)=>{
        res.render('login') 
    },
    contato:(req , res)=>{
     res.render('contato')
    }
}
module.exports= usuarioController