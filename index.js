const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/connecxao')
const Tabelas = require('./infraestrutura/tabelas')


conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Banco conectado')
        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(3000, () => console.log('servidor ON, rodando na porta 3000'))
    }
})
