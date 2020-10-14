// Executar o servidor é o comando NPM START no terminal

import React from 'react';
import ReactDOM from 'react-dom';

class Estados extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: 'Ralf',
            cargo: 'Desenvolvedor'
        }
    }

    render() {
        return (<div>
            <h1>Participantes: {this.state.nome}</h1>
            <h2>Cargo de: {this.state.cargo}</h2>
        </div>)
    }
}

ReactDOM.render(<Estados />, document.getElementById('root'));