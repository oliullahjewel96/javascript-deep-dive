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

// class Student extends PersonCl {
//   constructor(firstName, birthYear, course) {
//     //Always needs to happen first!
//     super(firstName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, butas a student I feel more like${
//         2037 - this.birthYear - 10
//       }`
//     );
//   }
// }

// const oli = new Student('Oli', 1996, 'Computer science');
// oli.introduce();
// oli.calcAge();

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     //protected property
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }

//   //Public interface
//   getMovements() {
//     return this._movements;
//   }
//   deposit(val) {
//     this._movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Approved`);
//       return this;
//     }
//   }
// }

// const acc1 = new Account('oli', 'TAKA', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1);

// //chaining

// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

// console.log(acc1.getMovements());

// Final coding challenge

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCL extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(charge) {
    this.#charge = charge;
    return this;
  }

  accelerate() {
    this.speed = this.speed + 10;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCL('Rivian', 120, 23);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
