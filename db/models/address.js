'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Address = db.define('address', {
	street1: {
		type: Sequelize.STRING,
		allowNull: false
	},
	street2: Sequelize.STRING,
	town: {
		type: Sequelize.STRING,
		allowNull: false,
		notEmpty: true
	},
	state: {
		type: Sequelize.STRING,
		default: 'NJ'
	},
	zip: Sequelize.STRING
});

module.exports = Address;
