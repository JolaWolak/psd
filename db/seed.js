'use strict'

const Promise = require('bluebird');
const db = require('./db');
var Fee = require('./models/fee');

function generateFees () {
  const fees = [];
  fees.push(Fee.build({
	num_children: 1,
	membership: 10,
	registration: 30,
	parish: 75,
	semester: 100,
	deposit: 60
  }));
  fees.push(Fee.build({
	num_children: 2,
	membership: 10,
	registration: 60,
	parish: 110,
	semester: 160,
	deposit: 60
  }));
  fees.push(Fee.build({
	num_children: 3,
	membership: 10,
	registration: 90,
	parish: 130,
	semester: 200,
	deposit: 60
  }));
  return fees;
}

function createFees () {
  return Promise.map(generateFees(), function (fee) {
    return fee.save();
  });
}

function seed () {
  return createFees();
}

console.log('SEEDING PROCESS: \nSynchronizing the database');

db.sync({force: true})
.then(function () {
  console.log('SEEDING PROCESS: \nSeeding the database');
  return seed();
})
.then(function () {
  console.log('SEEDING PROCESS: \nSeeding was successful');
}, function (err) {
  console.error('SEEDING PROCESS: \nError while seeding');
  console.error(err.stack);
})
.finally(function () {
  db.close();
  return null;
});