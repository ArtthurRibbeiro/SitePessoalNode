const express = require('express');
const router = express.Router();

const mensagemModel = require('../models/mensagemModel')

exports.getDados = async(req, res) => {
    try{
        const dados = await mensagemModel.find();
        res.status(200).json(dados);
    } catch (error){
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
};

exports.criarDado = async (req, res) => {
    const novaMensagem = new mensagemModel(req.body);
    console.log(novaMensagem);
    try{
        const mensagem = await novaMensagem.save()
        res.status(201).json(mensagem);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar dado' })
    }
};
