// Executar o servidor é o comando NPM START no terminal

import React from 'react';
import ReactDOM from 'react-dom';

class Formulario extends React.Component {

    constructor(props) {
        super(props);

        this.state = { campo: "" };
    }

    aoDigitar = (objeto) => {
        this.setState({ campo: objeto.target.value })
    }

    render() {
        return (
            <form>
                <input type="text" onChange={this.aoDigitar} placeholder="Informe algo.." />
                <p>{this.state.campo}</p>
            </form>
        )
    }
}

// Servidor
ReactDOM.render(<Formulario />, document.getElementById('root'));