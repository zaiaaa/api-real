class Tabelas{
    init(conn){
        this.conn = conn
        this.criarTabelaAtendimentos()
    }

    criarTabelaAtendimentos(){
        const sql = `
            CREATE TABLE IF NOT EXISTS atendimentos(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                DATA DATE,
                servico VARCHAR(100),
                cliente VARCHAR(100),
                status ENUM("Ativo", "Realizado", "Cancelado") DEFAULT "Ativo"
            );
        `;
        this.conn.query(sql, (e) => {
            if(e){
                console.log('erro pra criar a tabela ->', e.message)
                return
            }
            console.log("Tabela criada com sucesso")
        })
    }
}

module.exports = new Tabelas()