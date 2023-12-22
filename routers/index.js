const RouterAtendimento = require('./atendimentoRoute')
const authRoutes = require('./auth')

module.exports = (app, express) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(RouterAtendimento)
    app.use(authRoutes)
} 