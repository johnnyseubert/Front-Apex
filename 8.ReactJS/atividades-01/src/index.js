// Importar REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Class

class Atividade03 extends React.Component{

    render(){
        return(
            <div>
                <Menu/>
                
            </div>
        )
    }

}

ReactDOM.render(<Atividade03 />, document.getElementById('root'))