import React from 'react'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';

import PokemonDetail from './PokemonDetail';

import ListPokemon from './Components/ListPokemon';




class App extends React.Component{



  
  

  render(){

    return (

      <Router>
    
          <div className="">
            <Switch>
              
              <Route exact path="/"  component={HomePage} />
              <Route path="/pokemon/:id" component={PokemonDetail} />
             
            </Switch>
          </div>
    
      </Router>
      
    );
  }






  }
export default App;