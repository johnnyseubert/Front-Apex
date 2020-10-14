// Executar o servidor é o comando NPM START no terminal

import React from 'react';
import ReactDOM from 'react-dom';

class Eventos extends React.Component {

    mensagem() {
        alert("OI")
    }

    mensagem2(nome) {
        alert("Boa noite " + nome)
    }

    render() {
        return (<div>
            <button onClick={this.mensagem}>Clique Aqui</button>
            <button onClick={() => this.mensagem2('ralf')}>Clique Aqui também</button>
        </div>)
    }

}


ReactDOM.render(<Eventos />, document.getElementById('root'));