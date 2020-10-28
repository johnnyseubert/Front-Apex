// Executar o servidor é o comando NPM START no terminal

import React from 'react';
import ReactDOM from 'react-dom';






// IMPORTAR O CSS
import './estilos.css';
// IMPORTAR O CSS



class Formulario extends React.Component {

    render() {
        let meuEstilo = {
            backgroundColor: 'yellow',
            color: 'red'
        }

        return (
            <form>
                <input type="text" placeholder="Informe Sua idade" style={meuEstilo} />
            </form>
        )
    }
}

// Servidor
ReactDOM.render(<Formulario />, document.getElementById('root'));