import React from 'react'

import '../App.css';
import CardPokemon from './CardPokemon'
import 'bootstrap/dist/css/bootstrap.min.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from './CircularUnderLoad'



class ListPokemon extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      pokemon : null
    }
  }


  async componentDidMount(){
    const response = await fetch('http://localhost:4242/')
    const data = await response.json()
    this.setState({pokemon : data})
    console.log(data)
  }


  
  

  render(){

    return (
  
        <div className="row" style={{width:"100%"}}>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
           
            <CardPokemon key={pokemon.id} name={pokemon.nom} url={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+pokemon.numero+".png"} ide={pokemon.id} num={pokemon.numero}/>
            
            ))}
          </div>
        ) : (
         <div style={{marginLeft:"auto",marginRight:"auto",height:"100vh"}}>
           <CircularProgress/>
         </div>
        )}
        </div>
      
    );
  }






  }
export default ListPokemon;