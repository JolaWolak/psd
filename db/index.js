'use strict'

const db = require('./db');

const Fee = require('./models/fee');
const Registration = require('./models/registration');
const Child = require('./models/child');
const Teacher = require('./models/teacher');
const Contact = require('./models/contact');
const Address = require('./models/address');
const Phone = require('./models/phone');
const Grade = require('./models/grade');
const Parent = require('./models/parent');
const Family = require('./models/family');

Child.belongsTo(Contact, {foreignKey: 'contact_id'});
Parent.belongsTo(Contact, {foreignKey: 'contact_id'});
Teacher.belongsTo(Contact, {foreignKey: 'contact_id'});

Family.belongsTo(Child, {foreignKey: 'child_id'});
Family.belongsTo(Parent, {foreignKey: 'parent_id'});

Contact.belongsTo(Address, {foreignKey: 'address_id'});
Address.belongsTo(Phone, {foreignKey: 'phone_id'});

Grade.belongsTo(Teacher, {foreignKey: 'teacher_id'});

Registration.belongsTo(Child, {foreignKey: 'child_id'});

module.exports = db;