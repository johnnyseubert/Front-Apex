// Executar o servidor é o comando NPM START no terminal

import React from 'react';
import ReactDOM from 'react-dom';

class Propriedades extends React.Component {

    render() {
        return (<div>
            <h1>{this.props.nome}</h1>
            <h2>{this.props.curso}</h2>
        </div>)

    }
}

ReactDOM.render(<Propriedades nome='Ralf' curso='ReactJS' />, document.getElementById('root'));