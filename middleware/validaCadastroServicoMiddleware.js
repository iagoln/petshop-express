const validaCadastro = (req, res, next) => {
    const { nome, preco, descricao } = req.body
    // const nome = req.body.nome
    // const preco = req.body.preco
    // const descricao = req.body.descricao
    
    if (!nome)  {
        return res.send({ message: "O nome é obrigatório" })
    } else if (nome.length < 3) {
        return res.send({ message: "O nome precisa ter acima de tres carateres!" })
    }

    if (!preco) {
        return res.send({ message: "O preco é obrigatório" })
    } else if (Number.isInteger(preco)) {
        return res.send({ message: "O preco precisa ser um número válido!" })
    }

    if (!descricao) {
        return res.send({ message: "O descricao é obrigatório" })
    } else if (descricao.length < 10) {
        return res.send({ message: "A descricao precisa ter acima de 10 carateres!" })
    }

    next()

}
module.exports = validaCadastro
