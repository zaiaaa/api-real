const conexao = require('../inc/conexao')
class AtendimentoModel{
    listar(){
        const sql = "SELECT * FROM atendimentos"
        return new Promise((res, rej) => {
            conexao.query(sql, {}, (error, resposta) => {
                if(error){
                    console.log('erro na listagem ->', error.message)
                    rej(error)
                }
                res(resposta)
            })
        }) 
    }

    criar(novoAtendimento){
        const sql = `INSERT INTO atendimentos SET ?`
        return new Promise((res, rej) => {
            conexao.query(sql, novoAtendimento, (err, resposta) => {
                if(err){
                    console.log('erro na listagem ->', err.message)
                    rej(err) 
                }
                res(resposta)
            })
        })
    }

    atualizar(atendimentoAtualizado, id){
        const sql = `UPDATE atendimentos SET ? WHERE id = ?`
        return new Promise((res, rej) => {
            conexao.query(sql, [atendimentoAtualizado, id], (err, resposta) => {
                if(err){
                    console.log('erro na listagem ->', err.message)
                    rej(err) 
                }
                res(resposta)
            })
        })
    }

    deletar(id){
        const sql = `DELETE FROM atendimentos WHERE id = ${id}`

        return new Promise((res, rej) => {
            conexao.query(sql, id, (err, resposta) => {
                if(err){
                    console.log('Erro -> ' + err.message)
                    rej(err)
                }
                res(resposta)
            })
        })
    }
}

module.exports = new AtendimentoModel