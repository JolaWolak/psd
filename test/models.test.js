'use strict';

const expect = require('chai').expect;
const db = require ('../db');
const Fee = require ('../db/models/fee');
const Phone = require ('../db/models/phone');

describe('\nFee model tests\n***************', function () {

//First clear the database and recreate the tables before beginning each run
  before(function () {
    return db.sync({force: true});
  });

  it('has all the regular fees for one child', function () {
    return Fee.create({
	num_children: 1,
	membership: 10,
	registration: 30,
	parish: 75,
	semester: 100,
	deposit: 60
    })
    .then(function (savedFee) {
      expect(savedFee.num_children).to.equal(1);
      expect(savedFee.membership).to.equal(10);
      expect(savedFee.registration).to.equal(30);
      expect(savedFee.parish).to.equal(75);
      expect(savedFee.semester).to.equal(100);
      expect(savedFee.deposit).to.equal(60);
    });
  });

  it('has a virtual field for early registration fee', function () {
    return Fee.findOne({ where: { num_children: 1 } })
    .then(function (fee) {
      expect(fee.early_registration).to.equal(25);
    });
  });

  it('has a virtual field for annual fee', function () {
    return Fee.findOne({ where: { num_children: 1 } })
    .then(function (fee) {
      expect(fee.school_year).to.equal(200);
    });
  });

  it('the virtual fields are calculated correctly for 2 and 3 children', function () {
    return Fee.create({
	num_children: 2,
	membership: 10,
	registration: 60,
	parish: 110,
	semester: 160,
	deposit: 60
    })
    .then(function (fee2) {
      expect(fee2.school_year).to.equal(320);
      expect(fee2.early_registration).to.equal(50);
          return Fee.create({
			num_children: 3,
			membership: 10,
			registration: 90,
			parish: 130,
			semester: 200,
			deposit: 60
    	})
        .then(function (fee3) {
	      expect(fee3.school_year).to.equal(400);
	      expect(fee3.early_registration).to.equal(75);

        })
    });
  });
 });

describe('\nPhone model tests\n*****************', function () {

  it('stores a proper phone number', function () {
    return Phone.create({
  number: '7329193454',
  category: 'home'
    })
    .then(function (savedPhone) {
      expect(savedPhone.number).to.equal('7329193454');
      expect(savedPhone.category).to.equal('home')
    });
  });

  it('does not store a phone with invalid type or format', function () {

    let phone = Phone.build({
      number: '7329387678',
      category: 'vacation_home'
    });
    return phone.validate()
    .then(function (result) {
      //expect(result).to.be.an.instanceOf(SequelizeBaseError);
      //expect(result.message).to.contain('Validation error');
    });    

  });

});
