// Importa o módulo 'express'
const express = require('express');
const app = express();
const port = 3300;

// import
const users = require('./users.json')
const docs = require('./docs.json')


// Define a rota /users
app.get('/users', (req, res) => {
    res.json(users);
});

// Define a rota /docs
app.get('/docs', (req, res) => {
    res.json(docs);
});

// Roteamento para qualquer outra rota
app.use((req, res) => {
    res.status(404).send('Rota não encontrada');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
