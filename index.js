import express from 'express'
const router = express.Router
import fetch from 'node-fetch'
import { v4 as uuid } from 'uuid';
//import qouteRoutes from './routes/qoutes.js'

import bodyParser from 'body-parser'
        
    

const app = express()
const PORT = 3004



let savedQuotes = []
     
        
        
      app.use("/", express.static("client"))
        app.use(express.json())
        
        //app.use(bodyParser.json());
        

        app.get("/kanye", async (req, res) => {
          try{
          const response = await fetch("https://api.kanye.rest")
          const data = await response.json()
          res.json(data)
          }catch(err){
            res.status(404).error(err)
          }
      })


      app.get('/', (req, res) => {
        res.send('start babe')
    }) 


    app.post('/kanye', (req, res) => {
      const quote = req.body;
      savedQuotes.push({...quote, id: uuid()});
      //console.log(savedQuotes)
      res.json(`Quote was saved`);
})


  app.get('/quotes', async (req, res) => {
    try{
      console.log(savedQuotes)
      res.json(savedQuotes)
      }catch(err){
        res.status(418).error(err)
      }
  })
  
       
        
        app.listen(PORT, () => {
            console.log(`app is up and running on port ${PORT} you little jam-cracker`)
        })
      
