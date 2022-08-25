import express from 'express'
const router = express.Router
import fetch from 'node-fetch'
//import qouteRoutes from './routes/qoutes.js'

import bodyParser from 'body-parser'
        
    

const app = express()
const PORT = 3004


        
     
        
        
        app.use(express.json())
        app.use("/", express.static("client"))
        
        app.use(bodyParser.json());
        

        app.get("/kanye", async (req, res) => {
          const response = await fetch("https://api.kanye.rest")
          const data = await response.json()
          res.json(data)
      })


      app.use('/', (req, res) => {
        //console.log('hej')
        res.send('start babe')
    }) 


    app.get('/kanye', (req, res) => {
      //console.log('hej')
      res.send('start babe')
  }) 


  app.post('/kanye', (req, res) => {
    //console.log('hej')
    res.send('start babe')
}) 




        
        
        app.listen(PORT, () => {
            console.log('app is up and running you little jam-cracker')
        })
        //
