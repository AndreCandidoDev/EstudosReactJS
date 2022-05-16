import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  
    state={
      name: 'alguem',
      counter:0
    }

    lixo='teste'

    //passa atributo this para a função handlePClick
    handlePCLick = this.handlePCLick.bind(this) //usar para passar qualquer atributo this para funções

  handlePCLick(){
    //const {name} = this.state
    //console.log(this.lixo)
    //console.log(`Foi clicado ${name}`)
    this.setState({name:"mudou nome"})
  }

  //com arrow function o this vem nativamente na função não precisando dar bind
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter:counter+1})
  }

  render(){
    //const name = this.state.name
    const { name, counter } = this.state //Atribuição via desestruturação
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePCLick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            add counter
          </a>
        </header>
      </div>
    );
  }
}

export default App;
