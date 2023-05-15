'use strict';

//constructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const oli = new Person('Oli', 1996);
console.log(oli);

//1. A new empty object is created
//2. function is called, this = newly created object
//3. newly created object is a linked to prototype
//4. function automatically return {}

const fanzhendong = new Person('Fan', 1998);
console.log(fanzhendong);
console.log(oli instanceof Person);

//prototypes

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

oli.calcAge();

console.log(oli.__proto__);
console.log(oli.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(oli));
console.log(oli.hasOwnProperty('firstName'));
