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

const oli = {
  firstName: "Oli",
  birthYear: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.birthYear);
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
  // greet: () => {
  //   console.log(`Hey ${this.firstName}`);
  // },
};

oli.greet();
