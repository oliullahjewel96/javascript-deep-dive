"use strict";

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;
      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = "oli";
calcAge(1996);
