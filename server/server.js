const express = require('express')
const knex = require('knex')
const app = express()
const cors = require('cors')
const port = process.argv[2]


app.use(cors())

app.use(express.json())




const database = knex({
  client:'pg',
  connection : {
      host: '127.0.0.1',
      user: 'postgres',
      password:'cabella13',
      database:'pokemons'
  },
  });


// récuperer l'ensemble des pokemon oderby leurs numéros de pokedex
app.get('/',(req,res)=>{

  let tab = []
  database.from('pokemon').select("*").orderBy('numero', 'asc').then((rows) => {

      tab = rows
     }).catch((err) => { console.log( err); throw err })
  .finally(() => {
      console.log(tab)
      res.json(tab)
  });
  
  
})


// SOLUTION POUR RECUPERER LE NUMERO DE POKEDEX

app.get('/pokemons_dex/:id',(req,res)=>{
  const {id} = req.params

    database.from('pokemon').select("numéro").where('id',id).then((rows) => {

      tab = rows
    }).catch((err) => { console.log( err); throw err })
  .finally(() => {
   
      res.json(tab)
  });



})





// RECUPERER LES INFORMATIONS D UN POKEMON A UN CERTAIN ID 
app.get('/pokemons/:id',(req,res)=>{
  const {id} = req.params

    database.from('pokemon').select("*").where('id',id).then((rows) => {

      tab = rows
    }).catch((err) => { console.log( err); throw err })
  .finally(() => {
      
      res.json(tab)
  });



})


// SOLUTION POUR SUPPRIMER UN POKEMON


app.delete('/pokemons/:id',(req,res)=>{
  const {id} = req.params


  database.from('pokemon').where('id', id).del().then(
    res.send("<h1>Pokemon correctement supprimer</h1>")
  )

})



// SOLUTION POUR AJOUTER UN POKEMON

app.post('/pokemons',(req, res) => {
  console.log(req.body)


    database.insert({
        nom: req.body.nom,
        numéro: req.body.numéro,
        numero: req.body.numéro
    })
    .into('pokemon')
    .then( () => {
      res.send("Pokemon correctement ajouté")
    })
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        
        console.log
    })


});


///// GET ATTAQUES

app.get('/attaques/:id',(req,res)=>{
  const {id} = req.params

    database.from('attaques').select("*").where('id_pokemon',id).then((rows) => {

      tab = rows
    }).catch((err) => { console.log( err); throw err })
  .finally(() => {

      res.json(tab)
  });



})



app.listen(port, () => {
  console.log('Server app listening on port ' + port);
});

