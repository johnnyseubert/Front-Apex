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
app.use(express.static(__dirname + '/itens'));

// Rotas

// Carregar a Página e obter dados da API
app.get('/', (req, res) =>{

    // JSON
    let produtos = [];

    // Obter dados da API
    fetch('http://localhost:3000/produtos', {method: "GET"})
    .then(retorno => retorno.json())
    .then(dadosDoJson => res.render('pagina', { cadastrado: dadosDoJson }));
})

// Cadastrar os produtos
app.post('/cadastrar', (req, res) =>{
    // Obter os produto, valor e marca
    let produto = req.body.produto;
    let valor = req.body.valor;
    let marca = req.body.marca;

    // JSON para efetuar o cadastro
    let dados = { "produto": produto, "valor": valor, "marca": marca}

    // Enviar para a API

    fetch('http://localhost:3000/produtos',{
        method: "post",
        body: JSON.stringify(dados),
        headers: { 'Content-Type': 'application/json ' }
    })
    .then(res.redirect('/'))
})

// Deletar produtos do Json e da lista
app.get('/remover/:id', (req, res) =>{
    let id = req.params.id;

    // Efetuar a exclusao atraves da Fake API
    fetch('http://localhost:3000/produtos/' + id, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json ' }
    })
    .then(res.redirect('/'))
})



/*------------ Servidor ------------*/
app.listen(8080);