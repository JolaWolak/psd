'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Phone = db.define('phone', {
	number: {
		type: Sequelize.STRING,
		isNumeric: true,
		allowNull: false,
		notEmpty: true,
		len: [10,11]
	},
	category: {
    	type:   Sequelize.ENUM,
    	values: ['home','cell','work','other'],
    	default: 'home'

	}
});

module.exports = Phone;
