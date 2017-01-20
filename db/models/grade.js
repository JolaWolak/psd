'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Grade = db.define('grade', {
  textbook1_price: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },
  textbook2_price: {
  	type: Sequelize.INTEGER,
  	default: 0
  },
});

module.exports = Grade;
