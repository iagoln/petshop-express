const validaUsuarioLogado = (req, res, next) => {
    const usuario = req.cookies.user
    if(usuario){
        next()
    }else{
        res.send("Area restrita")
    }
}

module.exports = validaUsuarioLogado