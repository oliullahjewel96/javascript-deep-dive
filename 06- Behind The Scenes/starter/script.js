"use strict";

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     const output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }
//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }

// const firstName = "oli";
// calcAge(1996);

//thid keyword

// console.log(this);

// function calcAge(birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// }

// calcAge(1996);

// const calcAgeArrow = (birthYear) => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1995);

// const oli = {
//   birthYear: 1996,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.birthYear);
//   },
// };

// oli.calcAge();

// const muniya = {
//   birthYear: 2001,
// };

// muniya.calcAge = oli.calcAge;

// muniya.calcAge();

// const oli = {
//   firstName: "Oli",
//   birthYear: 1996,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.birthYear);

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
//     };
//     isMillenial();
//   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// greet: () => {
//   console.log(`Hey ${this.firstName}`);
// },
// };

// oli.greet();
// oli.calcAge();

//primitive type

// let age = 27;
// let oldAge = age;
// age = 28;
// console.log(age);
// console.log(oldAge);

// //reference type
// const me = {
//   firstName: "oli",
//   age: 27,
// };

// const friend = me;
// friend.age = 32;

// console.log("Friend: ", friend);
// console.log("Me: ", me);

// //copying object

// const robin = {
//   firstName: "Abdullah",
//   lastName: "Jobaer",
//   age: 28,
// };

// const marriedRobin = Object.assign({}, robin); // Only shallow copy the object
// marriedRobin.firstName = "Robin";

// console.log("Before Marriage: ", robin);
// console.log("After Marriage: ", marriedRobin);
