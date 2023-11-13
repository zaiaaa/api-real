//const Router = require('express').Router()
const { Router } = require('express')
const router = Router();
const atendimentoController = require('../controllers/atendimentoController')

//Get post put and delete

router.get("/atendimentos", (req, res) => {
    const listaAtendimentos = atendimentoController.buscar()
    listaAtendimentos
    .then(atendimentos => res.status(200).json(atendimentos))
    .catch(err => res.status(400).json(err.message))
})

router.post("/atendimentos", (req, res) => {
    const novoAtendimento = req.body 
    const atendimento = atendimentoController.criar(novoAtendimento)
    atendimento.then(atendimentoCriado => res.status(200).json(atendimentoCriado)).catch(err => res.status(400).json(err.message))
    
    //res.send(resposta)
})

router.put("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    const atendimentoAtualizado = req.body
    const atendimento = atendimentoController.alterar(atendimentoAtualizado, id)
    //const resposta = atendimentoController.alterar(id)
    atendimento.then((resultAtendimento) => res.status(200).json(resultAtendimento))
    .catch(e => res.status(400).json(e.message))
    
    
    // res.send(resposta)
    //res.send(`Chegou aqui atualizando o atendimento ${id}`)
})
 
router.delete("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    const atendimento = atendimentoController.deletar(id)

    atendimento.then((resp) => res.status(200).json(resp)).catch((e) => res.status(400).json(e.message))
    //res.send('Chegou aqui excluindo atendimento')
})

module.exports = router