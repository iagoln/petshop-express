const validaCadastro = (req,res,next)=>{
    const dadosCadatro =req.body
    if(dadosCadatro.nome == '' ){
        res.send('Esqueceu o campo nome')
    }
    next()
 
}
module.exports = validaCadastro