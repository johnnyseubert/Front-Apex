//Importações
import React from 'react';
import ReactDOM from 'react-dom';


//Class
class Principal extends React.Component {

    // Construtor
    constructor() {
        super();

        this.state = {
            nome: '',
            idade: '',
            vetor: []
        }
    }

    // Função de teclar
    teclar = (campo) => {
        let nome_campo = campo.target.name;
        let valor_campo = campo.target.value;
        this.setState({ [nome_campo]: valor_campo })
    }

    // Função de Cadastro
    cadastrar = (elemento) => {
        elemento.preventDefault();

        let objeto = {
            'nome': this.state.nome,
            'idade': this.state.idade
        }

        let copiaVetor = this.state.vetor;

        copiaVetor.push(objeto);

        this.setState({ vetor: copiaVetor })

        this.setState({ nome: '', idade: '' })
    }
    // Render
    render() {
        return (
            <div>

                {/*Formulário*/}
                <form onSubmit={this.cadastrar}>
                    <input type='text' name='nome' value={this.state.nome} placeholder='Nome' onChange={this.teclar} />
                    <input type='text' name='idade' value={this.state.idade} placeholder='Idade' onChange={this.teclar} />
                    <input type='submit' />
                </form>


                {/*Tabela*/}
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Selecionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.vetor.map((pessoa, linha) => (
                            <tr key={linha}>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.idade}</td>
                                <td>Teste</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        )
    }
}
//Exportar componente
ReactDOM.render(<Principal />, document.getElementById('root'))