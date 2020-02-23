// create a server and route to handle the client get request by sending back
// data on the requested animal in db.js
const db = require('./db/db');
const express = require ('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/:animal', (req,res)=>{
  let animal = req.params.animal.toLowerCase()
  res.writeHead(200, {"access-control-allow-origin": "*"})
  res.write(
    JSON.stringify({
        currentAnimal: `${animal}`,
        currentAnimalPicture: db[`${animal}Picture`],
        currentAnimalCount: db[`${animal}Count`],
        inputField: ""
  }));
  res.end() 
})

app.post('/',(req,res)=>{
  console.log(req.body)
  Object.assign(db, req.body)
  res.sendStatus(201)
})

app.listen(3000, ()=>console.log('server is up and running'))