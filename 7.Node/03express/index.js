// Importar Express
let express = require('express');

// Criar a variável com as funcionalidades do express
let app = express();

// Rota (é um endereço)
app.get('/', (req, res) => {  //Quando ta limpo "localhost:8080" ele faz a situação abaixo
    res.send("<h1>Aprendendo Node.js</h1>");
});

app.get('/sobre/:nome/:idade', (req, res) => {  //Quando ta "localhost:8080/sobre" ele faz a situação abaixo
    res.send("<h1>Olá " + req.params.nome + " você tem " + req.params.idade + " anos</h1>");
});

// Servidor
app.listen(8080);