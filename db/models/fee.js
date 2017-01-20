'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Fee = db.define('fee', {
	num_children: Sequelize.INTEGER,
	membership: Sequelize.INTEGER,
	registration: Sequelize.INTEGER,
	parish: Sequelize.INTEGER,
	semester: Sequelize.INTEGER,
	deposit: Sequelize.INTEGER
},
{ getterMethods: {
	school_year: function(){
		return 2 * this.semester
		},
	early_registration: function(){
		return this.registration - (5 * this.num_children)
		} 
	}
}
);

module.exports = Fee;
