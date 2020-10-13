/*
    express: npm i express
    express-handlebars: npm i express-handlebars
    body-parser: npm i body-parser  (É para mandar informações entre rotas EX: formulario para index etc)
    node-fetch: npm i node-fetch
*/

/*------------ Importações ------------*/

let express = require('express');

let handlebars = require('express-handlebars');

let bodyParser = require('body-parser');

let fetch = require('node-fetch');

// App
let app = express();

// Template
app.engine('handlebars', handlebars({ defaultLayout: 'principal' }))
app.set('view engine', 'handlebars')

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Especificar local com arquivos -> CSS, JS e Imagens
app.use(express.static(__dirname + '/publico'));


/*------------ Rotas ------------*/
app.get('/', (req, res) => {

    // Json
    let pessoas = [];

    // Obter dados da API
    fetch('http://localhost:3000/pessoas', { method: "GET" })
        .then(retorno => retorno.json())
        .then(dadosDoJson => res.render('pagina', { vetor: dadosDoJson }));
})

app.post('/cadastrar', (req, res) => {
    // Obter nome e idade
    let nome = req.body.nome;
    let idade = req.body.idade;

    // Json para efetuar o cadastro
    let dados = { "nome": nome, "idade": idade };

    // Enviar para a API
    fetch('http://localhost:3000/pessoas', {
        method: "post",
        body: JSON.stringify(dados),
        headers: { 'Content-Type': 'application/json ' }
    })
        .then(res.redirect('/'));
})

app.get('/remover/:id', (req, res) => {

    // Obter o id
    let id = req.params.id;

    // Efetuar a exclusão atraves da API
    fetch('http://localhost:3000/pessoas/' + id, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json ' }
    })
        .then(res.redirect('/'))
})

/*------------ Servidor ------------*/
app.listen(8080);
