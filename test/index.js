import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      pokemon : null
    }
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:3000/pokemons/27)
    const data = await response.json()
    this.setState({pokemon : data.name})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello to pokedex
          </p>
          <span style={{color : 'red'}}> JSON : {this.state.pokemon} </span>

        </header>
      </div>
    );
  }




  }
export default App;