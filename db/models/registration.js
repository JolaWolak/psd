'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Registration = db.define('registration', {
  school_year : {
  	type: Sequelize.STRING
  },
  date: Sequelize.DATEONLY,
  status : {
  	type:   Sequelize.ENUM,
    values: ['paid','paid_half','unpaid']
	}
});

module.exports = Registration;
