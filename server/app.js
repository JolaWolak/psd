const path = require('path');
const express = require('express');
const app = express();
const db = require ('../db/index.js');
const Child = require('../db/models/child');
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req,res,next) => {
  console.log('hitting the root');
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/test', (req,res,next) => {
  console.log('GET /test');
  res.sendStatus(200);
});

app.post('/', function (req,res,next) {
  console.log('received registration data:');
  console.log(req.body);
  
  Child.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    allergies: req.body.allergies,
    dob: req.body.dob,
    birth_place: req.body.birthPlace
  })
  .then( (newChild) => res.status(201).json(newChild))
  .catch(next);
});

app.listen(port, () => {
  console.log('Server started and is listening on port ', port);
  db.sync({force: true})
  .then(function () {
    console.log('Database has been connected as well...');
  })
  .catch(function (err) {
    console.error('\n\n\nTHERE WAS A PROBLEM with the startup\n\n\n', err, err.stack);
  });
});