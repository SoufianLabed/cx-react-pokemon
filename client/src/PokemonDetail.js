import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './PokemonDetail.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePokemon from './Components/TablePokemon'
import CardAttaque from './Components/CardAttaque'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'




const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





class PokemonDetail extends React.Component{

  

  constructor(props){
    super(props);

    this.state = {
        id : this.props.match.params.id,
    }

    
}






async componentDidMount(){

  // je vais chercher l'ensemble des info du pokemon correspondant à l'id 
  const response = await fetch(`http://localhost:4242/pokemons/${this.state.id}`)

  // Je vais chercher à quelle numéro dans le pokedex est representé par l'id 
  const response_num = await fetch(`http://localhost:4242/pokemons_dex/${this.state.id}`)

   // Je vais chercher toutes les attaques représenté par l'id
  const response_attaques = await fetch(`http://localhost:4242/attaques/${this.state.id}`)


  

  //const responseAttaque = await fetch(`http://localhost:4242/pokemons/${this.state.id}`)
 
  const data = await response.json()
  const numero = await response_num.json()
  const attaques = await response_attaques.json()
  console.log(attaques)

  this.setState({attaques : attaques})
  this.setState({pokemon : data})
  this.setState({num : `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numero[0].numéro}.png`})
 

  
}



  render(){

    

    return (
  
        <div className="all">
          <Link to="/">

         
          <FontAwesomeIcon style={{color:"white",width:"10%",height:"30px",marginTop:"30px",position:"absolute"}}icon={faArrowLeft} />
          </Link>
        <div className="imgpoke">
    
        <i class="fas fa-arrow-left"></i>

          <img src={this.state.num}  />
        </div> 

        <div style={{color:"white",fontSize:"25px",marginLeft:"17%"}}>CARACTÉRISTIQUES</div>
        <hr/>
          
        {this.state.pokemon ? (

          <div className="poketab">

               

            {this.state.pokemon.map(pokemon => (
           
            
                <div className="doubletab">
               
                <TablePokemon 
                      
                      champs1={"couleur"} 
                      champs2={"espece"} 
                      champs3={"type"} 
                      champs4={"type2"} 
                      champs5={"taille"} 
                      champs6={"poids"} 
                      champs7={"forme"} 
                      
                      rep1={pokemon.couleur} 
                      rep2={pokemon.espece} 
                      rep3={pokemon.type1} 
                      rep4={pokemon.type2} 
                      rep5={pokemon.taille} 
                      rep6={pokemon.poids} 
                      rep7={pokemon.forme} 
                    />
            
                  
                      
                <TablePokemon 


                      champs1={"Pokemon"} 
                      champs2={"Nom FR"} 
                      champs3={"Nom EN"} 
                      champs4={"NOM DE"} 
                      champs5={"NOM TM"} 
                      champs6={"NOM JA"} 
                      champs7={"oeuf pas"} 
                      
                      rep1={pokemon.pokemon} 
                      rep2={pokemon.nom} 
                      rep3={pokemon.nomen} 
                      rep4={pokemon.nomde} 
                      rep5={pokemon.nomtm} 
                      rep6={pokemon.nomja} 
                      rep7={pokemon.oeufpas}        
                    />
                    
                    </div>
                    

                    
                    
         
              

             
            ))}
          </div>
        ) : (
         <div></div>
        )}


        <div style={{color:"white",fontSize:"25px",marginLeft:"17%",marginTop:"3%"}}>ATTAQUES</div>
        <hr/>
          
        {this.state.attaques ? (
         <div className="list_cardA">
          <div className="row">
            {this.state.attaques.map(attaques => (
                <div className="cardA">
                  <CardAttaque puissance={attaques.puissance} nom={attaques.nom} niveau={attaques.niveau} precision={attaques.precision} pp={attaques.pp} />
                </div>
            ))}
            </div>
            
          </div>
          
        ) : (
         <div>LOADING</div>
        )}

        
        


        </div>
      
    );
  }






  }
export default PokemonDetail;