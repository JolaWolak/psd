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
});

module.exports = Fee;
