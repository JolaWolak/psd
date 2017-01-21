const path = require('path');
const express = require('express');
const app = express();
const db = require ('../db/index.js');
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req,res,next) => {
	console.log('hitting the root');
	res.sendFile(path.join(__dirname, '../index.html'));
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