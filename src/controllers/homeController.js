const express = require('express');
const router = express.Router();


exports.index = ((req, res) => {
    res.send('Rota Index na Home controller');
    })