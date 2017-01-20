'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Family = db.define('family', {
  name: Sequelize.STRING,
  member_type: {
  	type: Sequelize.ENUM,
  	values: ['parent','child','other_adult']
  }
});

module.exports = Family;
