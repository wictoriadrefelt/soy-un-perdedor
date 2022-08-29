import express from 'express'
const router = express.Router
import fetch from 'node-fetch'
import { v4 as uuid } from 'uuid';
//import qouteRoutes from './routes/qoutes.js'

import bodyParser from 'body-parser'
        
    

const app = express()
const PORT = 3004



// list of quotes to save from external api 
let savedQuotes = []
     
        
        
      app.use("/", express.static("client"))
        app.use(express.json())
        
        //app.use(bodyParser.json());
        
  // get quote from extenal api 
        app.get("/kanye", async (req, res) => {
          try{
          const response = await fetch("https://api.kanye.rest")
          const data = await response.json()
          res.json(data)
          }catch(err){
            console.log(err, 'not here my dear sir')
          }
      })


      app.get('/', (req, res) => {
        res.send('start babe')
    }) 



    // save quote to api
    app.post('/kanye', (req, res) => {
      const quote = req.body;
      
      if(!req.body.id && !quote){
        throw new Error('no quote displayed to save')
      }else{
      savedQuotes.push({...quote, id: uuid()});
      //console.log(savedQuotes)
      res.json(`Quote was saved`);
      }
})


// retrieve all quotes
  app.get('/quotes', (req, res) => {
    try{
      console.log(savedQuotes, 'all the qoutes')
      res.json(savedQuotes)
      }catch(err){
        res.status(418).error(err)
      }
  })


  // to extract quote with specific id 
  app.get('/quotes/:id', async (req, res) => {
    try {
      const foundQuotes = savedQuotes.find((quote) => {
          if(quote.id == req.params.id) {
              return true
          }
      })

      if(!foundQuotes) {
          throw new Error("No quote with this id")
      }

      res.json(foundQuotes)
  } catch(err) {
      res.status(404).json(err.message)
  }
})



// to delete quote with specific id
app.delete("/quotes/:id", (req, res) => {
  try {

      const indexToRemove = savedQuotes.findIndex(quote => quote.id == req.params.id)

      if(indexToRemove == -1) {
          throw new Error("Id does not exists")
      }

      const nameFromRemoved = savedQuotes[indexToRemove].quote
      console.log(savedQuotes, 'hello')
      console.log(savedQuotes[indexToRemove].quote.quote, 'what?')
      console.log(savedQuotes[indexToRemove].quote, 'whaaaat?')
      console.log(savedQuotes[indexToRemove].id, 'the?')

      savedQuotes.splice(indexToRemove, 1)

      res.json(`Quote ${nameFromRemoved} removed!`)

  } catch(err) {
      res.status(418).json(err.message)
  }
})
  

        
        app.listen(PORT, () => {
            console.log(`app is up and running on port ${PORT} you little jam-cracker`)
        })
      
