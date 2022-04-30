const bcrypt = require('bcrypt');
const saltRounds = 10;
const bancoUser = require('../model/users.json')
const fs = require('fs')

const usuarioController = {
    cadastro: (req, res) => {
        res.render('cadastro')
    },
    cadastroUsuario: (req, res) => {
        const { nome, email, senha } = req.body
        const hash = bcrypt.hashSync(senha, saltRounds);
        const user = { id: Date.now(), nome: nome, senha: hash, email: email }
        bancoUser.push(user)

        fs.writeFileSync("./model/users.json", JSON.stringify(bancoUser), null, 4)
        res.send(bancoUser)
    },
    login: (req, res) => {
        res.render('login')
    },
    contato: (req, res) => {
        res.render('contato')
    },
    logar: (req, res) => {
        const { email, senha } = req.body
        for (const user of bancoUser) {
            // if (user.email == email) {
            //     const resultadoSenha = bcrypt.compareSync(senha, user.senha)
            //     if (resultadoSenha == true) {
            //         return res.send("usuario logado")
            //     }
            // }
            const resultadoSenha = bcrypt.compareSync(senha, user.senha)
            if (user.email == email && resultadoSenha == true ) {
               // res.cookie('user',user.email )
                req.session.user = user.email   
                return res.send("usuario logado")
            }
        }
        return res.send("usario ou senha incorreto")
        },
        sobre: (req, res) => {
         return   res.render('usuario/sobre')
        }
    }
module.exports = usuarioController