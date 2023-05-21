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

//static methods

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //instance methods
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   //static method
//   static hey() {
//     console.log('Hey There ');
//     console.log(this);
//   }
// }

// PersonCl.hey();

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

//coding challenge 2

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

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed = this.speed + 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed = this.speed - 5;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('ford', 120);

// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);

//inheritance in ES6 classes

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //instance methods
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  //static method
  static hey() {
    console.log('Hey There ');
    console.log(this);
  }
}

class Student extends PersonCl {
  constructor(firstName, birthYear, course) {
    //Always needs to happen first!
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, butas a student I feel more like${
        2037 - this.birthYear - 10
      }`
    );
  }
}

const oli = new Student('Oli', 1996, 'Computer science');
oli.introduce();
oli.calcAge();
