// create server
const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

app.use(cors());

app.get('/:animal', (req, res) => {
  res.send({
    currentAnimal: req.params.animal,
    currentAnimalPicture: db.animals[`${req.params.animal}Picture`],
    currentAnimalCount: db.animals[`${req.params.animal}Count`],
  });
});

app.listen(3000, () => console.log('server up on port 3000'));
