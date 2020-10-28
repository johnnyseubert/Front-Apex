// Importar REACT
import React from 'react';
import ReactDOM from 'react-dom';


// Class

class Atividade01 extends React.Component{

    constructor(props){
        super(props);

        this.state ={ numero: 0 }

    }

    // Incrementar
    incrementar  = () =>{
        let obterNumero = this.state.numero + 1;
        this.setState({numero : obterNumero});
    }

    // Decrementar
    decrementar = () =>{
        let obterNumero2 = this.state.numero - 1;
        this.setState({numero : obterNumero2});
    }

    render(){
        return(
            <div>
                {/* Botões */}
                <button onClick={this.incrementar}>Incremento</button>
                <button onClick={this.decrementar}>Decremento</button>
                <h1>{this.state.numero}</h1>
            </div>
        )
    }

}

ReactDOM.render(<Atividade01 />, document.getElementById('root'))