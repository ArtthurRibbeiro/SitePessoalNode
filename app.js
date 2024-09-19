const express = require('express');

const path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/msgDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

//config de porta
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// Configuração para servir arquivos estáticos
app.use(express.static(__dirname + '/public'));

// Rotas
const rotas = require('./routes/rotas');
app.use( rotas);

// Servir arquivos estáticos da pasta 'dist'
app.use(express.static(path.join(__dirname, './dist')));



// Rota para servir a aplicação Vue
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});