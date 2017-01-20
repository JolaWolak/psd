'use strict'
const Sequelize = require('sequelize');
const db = require('../db');

const Parent = db.define('parent', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING
},
  { getterMethods   : {
      fullName : function() { 
        return this.first_name + ' ' + this.last_name 
        }
      }
  }
);

module.exports = Parent;
