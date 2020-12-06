const knex = require('knex')
const process = require('process')
const fs = require('fs')
const pokedex = require('./pokedex.json')



/*
BONJOUR ! N'OUBLIEZ PAS DE CHANGER LES IDENTIFIANT DE LA BASE DE DONNEE. POUR EXECUTER LE SEED :

 - LANCER UNE PREMIERE LE SEED (CREATION DES TABLES POKEMON ET ATTAUQES)
 - ENLEVER LES COMMENTAIRES A LA LIGNE 123 POUR INSERER LES ATTAQUES ET LES POKEMONS

*/

let attaques = []

pokedex.forEach(element => {

    attaques.push(element["attaques"])

})




const database = knex({
    client:'pg',
    connection : {
        host: '127.0.0.1',
        user: 'postgres',
        password:'',
        database:'pokemons'
    },
    });






    // PokedexA = insert de Pokemon
    var pokedexA = pokedex

    pokedexA.forEach(element => 
        
        delete element.attaques
        
        );

     

    

    //Keyss conteint l'ensemble des champs d'un Pokemon
    let keyss = []
    let i = 0 
    
    while (i< pokedexA.length){
    
        let tab = Object.keys(pokedexA[i])
    
        tab.forEach(element => {  
           
            if(!keyss.includes(element)){
                keyss.push(element)
            }
        });
        
    
    i++
    }

    
database.schema.hasTable('pokemon').then(function(exists){
    if(!exists){
       return database.schema.createTable('pokemon', function (table) {

        table.increments('id').primary();
  

        keyss.forEach(element =>

             table.text(element)
             
             );
           
            
            
            
      }).then(
       
         console.log
      )
    }
})



database.schema.hasTable('attaques').then(function(exists){
    if(!exists){
       return database.schema.createTable('attaques', function (table) {

            table.increments('id').primary();
            table.string('niveau');
            table.string('nom');
            table.string('puissance');
            table.string('precision');
            table.string('pp');
            table.integer('id_pokemon').references('id').inTable('pokemon').notNull();
            
            
            
      }).then(
        console.log
      )
    }
})


/// INSERT 

/*
pokedexA.forEach(element => {
       
       
        
        database('pokemon').insert(element).returning('id').then((id) =>{
        console.log(id)


        let compteur = 0

        

            
        while(compteur < attaques[id-1].length){

        database.insert({
            niveau: attaques[id-1][compteur]["niveau"],
            nom: attaques[id-1][compteur]["nom"],
            puissance: attaques[id-1][compteur]["puissance"],
            precision: attaques[id-1][compteur]["precision"],
            pp: attaques[id-1][compteur]["pp"],
            id_pokemon : parseInt(id, 10)
        })
        .into('attaques')
        .then(function (id) {
            // use id here
        });
            compteur++
        }


        }
        )
        
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            
            console.log
        })
      
    }
)
*/
