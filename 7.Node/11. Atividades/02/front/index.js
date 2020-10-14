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



/*--------------- ROTAS ---------------*/

// Carregar página inicial
app.get('/', (req, res) =>{
    res.render('inicio')
})

// Carregar CADASTRAR RECEITAS e pegar dados da API
app.get('/cadastrarreceitas', (req, res) =>{
    // JSON
    let receitas =[];

    // obter dados da API
    fetch('http://localhost:3000/receitas', {method: "GET"})
    .then(retorno => retorno.json())
    .then(dadosDoJson => res.render('cadastrar', {cadastrados: dadosDoJson}))
})

// Cadastrar
app.post('/cadastrarreceitas', (req, res) =>{
    // Obter inputs
    let receita = req.body.receita
    let ingredientes = req.body.ingredientes
    let modoPreparo = req.body.modoPreparo
    let qtdPessoas = req.body.qtdPessoas

    // JSON para efetuar o cadastro
    let dados = {"receita": receita, "ingredientes": ingredientes, "modoPreparo": modoPreparo, "qtdPessoas": qtdPessoas}

    // Enviar para a API
    fetch('http://localhost:3000/receitas',{
        method: "post",
        body: JSON.stringify(dados),
        headers: { 'Content-Type': 'application/json ' }
    })
    .then(res.redirect('/cadastrarreceitas'))
})

// Deletar produtos do Json e da lista
app.get('/remover/:id', (req, res) =>{
    let id = req.params.id;

    // efetuar a exclusao
    fetch('http://localhost:3000/receitas/' + id, {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json ' }       
    })
    .then(res.redirect('/cadastrarreceitas'))
})

// Voltar para o inicio
app.get('/voltar', (req, res)=>{
    res.render('inicio')
})

// LISTAR AS RECEITAS
app.get('/listarreceitas', (req, res) =>{
// Obter inputs
let receita = req.body.receita
let ingredientes = req.body.ingredientes
let modoPreparo = req.body.modoPreparo
let qtdPessoas = req.body.qtdPessoas

// JSON para efetuar o cadastro
let dados = {"receita": receita, "ingredientes": ingredientes, "modoPreparo": modoPreparo, "qtdPessoas": qtdPessoas}

// Enviar para a API
fetch('http://localhost:3000/receitas',{
    method: "GET",
    body: JSON.stringify(dados),
    headers: { 'Content-Type': 'application/json ' }
})
    .then(res.render('listar'))

})

// Servidor
app.listen(8080);