const authenticate = require("../controllers/auth")
const { Router } = require('express')
const router = Router();

router.post('/login', (req, res) => {
    const {email, senha} = req.body;
    const auth = authenticate.Auth(email, senha)
    auth.then(login => res.status(200).json(login))
})

module.exports = router