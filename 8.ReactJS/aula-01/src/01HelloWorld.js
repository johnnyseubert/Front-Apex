// Executar o servidor é o comando NPM START no terminal

import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

    render() {
        return (<div>
            <h1>Oi</h1>
            <h2>Tchau</h2>
        </div>)
    }
}


ReactDOM.render(<HelloWorld />, document.getElementById('root'));