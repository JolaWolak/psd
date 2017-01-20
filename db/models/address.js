'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Address = db.define('address', {
	street1: Sequelize.STRING,
	street2: Sequelize.STRING,
	town: Sequelize.STRING,
	state: {
		type: Sequelize.STRING,
		default: 'NJ'
	},
	zip: Sequelize.STRING
});

module.exports = Address;
