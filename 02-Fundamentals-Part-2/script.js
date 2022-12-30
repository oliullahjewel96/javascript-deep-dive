// Functions

// function logger() {
//   console.log("My name is Oli ullah Jewel");
// }

// //Calling / running / invoking a function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//Function declaration

// function calculateAge1(birthYear) {
//   return (age = 2023 - birthYear);
// }

// const age1 = calculateAge1(1996);

//Function expression (Anonymous function)

// const calculateAge2 = function (birthYear) {
//   return (age = 2023 - birthYear);
// };

// const age2 = calculateAge2(1997);

// console.log(age1, age2);

//Arrow Function

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 60 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

const ageLeftForRetirement = yearsUntilRetirement(1996, "Oli");
console.log(ageLeftForRetirement);
