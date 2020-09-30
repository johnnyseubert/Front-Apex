// Importar EXPRESS
let express = require('express');
let app = express();

// Importar handlebars
let handlebars = require('express-handlebars')

// Importar o bodyparser
let bodyParser = require('body-parser');

// Template
app.engine('handlebars', handlebars({
    defaultLayout: 'principal'
}))
app.set('view engine', 'handlebars')

// BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// JSON DE USUARIOS
let usuarios = []


// ROTAS
app.get('/', (req, res) => {
    res.render('formulario')
})

app.post('/cadastrar', (req, res) => {
    usuarios.push({ 'nome': req.body.usuario })
    res.render('formulario', { 'cadastro': true, 'usuarios': usuarios })
})

app.get('/remover/:id', (req, res) => {
    usuarios.splice(req.params.id, 1)
    res.render('formulario', { 'removido': true, 'usuarios': usuarios })
})

// Servidor
app.listen(8080);