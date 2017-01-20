'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Child = db.define('child', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  allergies: Sequelize.TEXT,
  dob: Sequelize.DATEONLY,
  birth_place: Sequelize.STRING,
  student_email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
	}
});

module.exports = Child;
