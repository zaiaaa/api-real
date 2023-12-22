const jwt = require('jsonwebtoken')
//Usar para criptografar senhas
const bcrypt = require("bcrypt")

class AuthModel{
    tryAuth(email, senha){ 
            return new Promise((res, rej) => {

                if(!(email && senha)){
                    rej("Usuário e senha não informados")
                }

                const user = {nome: "Gustavo", email: "gu@gmail.com", pass: "123456"}
                //Futuramente pegar usuários do banco

                if(!user){
                    rej("Usuário e/ou senha não não existem")
                }
                //nesse caso, deveriamos usar o bcrypt.compareSync(senhaDoBanco, user.pass)
                if(user && (senha == user.pass)){
                    const token = jwt.sign({
                        name: user.nome,
                        email 
                    },
                    "oagniurbneoiah3903ibu134obsodfn",
                    {
                        expiresIn: "24h"
                    })
                    res(token)
                }else{
                    rej("Usuário e/ou senha não não existem")
                }
        
        })
    }
}


module.exports = new AuthModel

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR3VzdGF2byIsImVtYWlsIjoiZ3VAZ21haWxhYXdkLmNvbSIsImlhdCI6MTcwMDU0MjE3MiwiZXhwIjoxNzAwNjI4NTcyfQ.jhdb3yWZlObxbLWGnqPOlSlsOUZFNf1hauumw0haczg