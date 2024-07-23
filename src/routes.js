const express = require('express');
const router = express.Router();
const ApiController = require('./controllers/ApiController')


router.post('/movies', ApiController.adicionar)
router.get('/movies', ApiController.pesquisarFilmes)
router.get('/movies/:codigo', ApiController.pesquisarUm)
router.put('/movies/:codigo', ApiController.alterar)
router.delete('/movies/:codigo', ApiController.excluir)

module.exports = router;