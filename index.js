const express = require('express');
const app = express()
const port = 3000
const router = require('./routers/index');
const conexao = require('./inc/conexao')
const tabelas = require('./inc/tabelas')
const cors = require('cors');

app.use(cors({
    origin: 'http://127.0.0.1:5500',
}))

router(app, express)
tabelas.init(conexao)


app.listen(port, (error) => {
    if(error){
        console.log('erro -> ', error)
    }else{
        console.log('started at port 3000')
    }
})