// Importar express
let express = require('express');
let app = express();

// Rota
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pagina.html');
});

// Servidor
app.listen(8080);