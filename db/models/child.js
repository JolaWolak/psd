'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Child = db.define('child', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  allergies: Sequelize.TEXT,
  dob: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  birth_place: Sequelize.STRING,
  student_email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true
		}
	}
},
  { getterMethods   : {
      fullName : function() { 
        return this.first_name + ' ' + this.last_name 
        }
      }
  }
);

module.exports = Child;
