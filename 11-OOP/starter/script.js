'use strict';

//constructor function

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const oli = new Person('Oli', 1996);
// console.log(oli);

// //1. A new empty object is created
// //2. function is called, this = newly created object
// //3. newly created object is a linked to prototype
// //4. function automatically return {}

// const fanzhendong = new Person('Fan', 1998);
// console.log(fanzhendong);
// console.log(oli instanceof Person);

// //prototypes

// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// oli.calcAge();

// console.log(oli.__proto__);
// console.log(oli.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(oli));
// console.log(oli.hasOwnProperty('firstName'));

// console.log(oli.__proto__.__proto__);

//coding challenge

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 110);
// const car2 = new Car('Marcedes', 100);

// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car2.brake();
// car2.brake();
// car2.brake();

//ES6 Classes
// const PersonCl = class{

// }

//class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
// }

// const oli = new PersonCl('Oli', 1996);

// console.log(oli);
// oli.calcAge();
