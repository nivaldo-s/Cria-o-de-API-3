const express = require('express');
const app = express();
const port = 3000;

app.use (express.json());

let usuarios = [];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const {nome, email} = req.body;
    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e Email são obrigatórios' });
    }
    const novoUsuario = {id: usuarios.length + 1, nome, email };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});