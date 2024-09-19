const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MensagemSchema = new Schema({
    nome: {type: String, required:true},
    email: {type: String, required:true},
    assunto: {type: String, required:true},
    mensagem: {type: String, required:true},
})

module.exports = mongoose.model('MensagemModel', MensagemSchema)