//Importações
import React from 'react';
import ReactDOM from 'react-dom';

//Class
class Api extends React.Component {

    //Contrutor
    constructor() {
        super();

        this.state = ({
            dados: []

        })
    }
    // Após o componente ser renderizado
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(pegarInformacaoSite => pegarInformacaoSite.json())
            .then(pegarInformacaoSite => this.setState({ dados: pegarInformacaoSite }))
    }
    // Função obter dados
    obterDados(indice) {
        console.log(this.state.dados[indice])
    }

    // Render
    render() {
        return (
            <table border="0">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.dados.map((pessoa, linha) => (
                        <tr key={linha}>
                            <td>{pessoa.id}</td>
                            <td>{pessoa.name}</td>
                            <td>{pessoa.email}</td>
                            <td><button onClick={() => (this.obterDados(linha))}>Selecionar</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        )
    }
}

//Exportar componente
ReactDOM.render(<Api />, document.getElementById('root'))