'use strict'

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/psd', 
						 { logging: true });




module.exports = db;