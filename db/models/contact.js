'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Contact = db.define('contact', {
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
	}
});

module.exports = Contact;
