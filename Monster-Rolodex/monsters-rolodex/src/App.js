import { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      name: {prenom: 'Brandon', nom: 'Guyon'},
      company: 'Arinfo'
    };
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>Salut je m'appel {this.state.name.prenom} {this.state.name.nom} et je travail chez {this.state.company}</p>
          
          <button onClick={() => {
            this.setState({name: {prenom: 'Bryan', nom: 'Guyon'}})
          }}>Changer prénom</button>
        </header>
      </div>
    );

  }
  
}

export default App;
