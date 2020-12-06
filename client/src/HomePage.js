import React from 'react'

import './HomePage.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import ListPokemon from './Components/ListPokemon';




class HomePage extends React.Component{



  
  

  render(){

    return (
      
      <div className='main'>
        <div className="imgpoke">
          <img src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Girl in a jacket"  ></img>
       </div>
        
        <div className="list">
          <ListPokemon/>
        </div>
      </div>
      
    );
  }






  }
export default HomePage;