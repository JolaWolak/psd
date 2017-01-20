'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Teacher = db.define('teacher', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING
});

module.exports = Teacher;
