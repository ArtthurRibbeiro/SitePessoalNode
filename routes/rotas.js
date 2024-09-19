const express = require('express');
const router = express.Router();


const HomeController = require('../src/controllers/homeController');
const MensagemController = require ('../src/controllers/mensagemController')

// Rota GET raiz
router.get('/', (req, res) => {
    res.send('Rota raiz');
});

// Rota GET /about
router.get('/about', (req, res) => {
    res.send('Rota about');
});

router.get('/home', HomeController.index);
//router.post('/cadastrar', HomeController.cadastrar);


// Handle API routes
router.post('/api/mensagem', MensagemController.criarDado);
router.get('/api/mensagem', MensagemController.getDados)

module.exports = router;