// Executar o servidor é o comando NPM START no terminal

import React from 'react';
import ReactDOM from 'react-dom';

class CicloVida extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            corPrimaria: 'vermelho'
        }
    }


    /* Alterar o valor do State através do props
    static getDerivedStateFromProps(props, state) {
        return { corPrimaria: props.cor }
        // O Dois pontos significa Recebe ou seja corPrimaria recebe props.cor
    }*/


    // Depois de Renderizar o componente
    componentDidMount() {
        setTimeout(() => {
            this.setState({ corPrimaria: "Amarelo" })
        }, 2000);


    }

    render() {
        return (<div>
            <h1>{this.state.corPrimaria}</h1>
        </div>)
    }
}

ReactDOM.render(<CicloVida cor="Azul" />, document.getElementById('root'));