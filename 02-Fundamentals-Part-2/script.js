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

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 60 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// const ageLeftForRetirement = yearsUntilRetirement(1996, "Oli");
// console.log(ageLeftForRetirement);

// function cutFruitIntoPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitIntoPieces(apples);
//   const orangePieces = cutFruitIntoPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return juice;
// }

// const finalJuice = fruitProcessor(2, 4);
// console.log(finalJuice);

//Coding challenge 4

// const calcAverage = (score1, score2, score3) => {
//   const averageScore = (score1 + score2 + score3) / 3;
//   return averageScore;
// };

// const dolphinsAvgScore = calcAverage(44, 23, 71);
// const koalasAvgScore = calcAverage(65, 54, 49);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins > avgKoalas * 2) {
//     console.log(`Dolphins Wins (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas > avgDolphins * 2) {
//     console.log(`Koalas Wins (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(
//       `No team wins ( Koalas ${avgKoalas} vs Dolphins ${avgDolphins})`
//     );
//   }
// };

// checkWinner(dolphinsAvgScore, koalasAvgScore);

//Arrays

// const friends = ["Oli", "Robin", "Antu"];

// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length - 1);
// console.log(friends[friends.length - 1]);

// const calcAge = (birthYear) => 2023 - birthYear;

// const years = [1996, 1997, 1998, 1999, 2000, 2001];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

const friends = ["Oli", "Robin", "Antu"];

//Add element to the array
friends.push("Hridoy");

console.log(friends);

friends.unshift("Nick"); //Add to the first index of the array
console.log(friends);

//remove element from array

friends.pop();
console.log(friends);

friends.shift(); //remove first element
console.log(friends);

console.log(friends.indexOf("Robin"));
console.log(friends.indexOf("saif"));

console.log(friends.includes("Oli"));
console.log(friends.includes("Saif"));

if (friends.includes("Antu")) {
  console.log("You have a friend called Antu");
}
