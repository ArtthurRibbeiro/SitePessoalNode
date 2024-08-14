#!/bin/bash

# Navega para a pasta do backend
cd backend || { echo "Pasta do backend não encontrada"; exit 1; }

# Instala dependências
npm install

# Copia arquivos de configuração (se necessário)
# cp ../path/to/config.json .

# Inicia o servidor
npm start