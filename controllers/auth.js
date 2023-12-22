const authModel = require('../models/auth')

class AuthenticateController{
    Auth(email, senha){ 
        return authModel.tryAuth(email, senha)
    }
}


module.exports = new AuthenticateController()