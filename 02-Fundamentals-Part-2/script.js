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

//const friends = ["Oli", "Robin", "Antu"];

//Add element to the array
// friends.push("Hridoy");

// console.log(friends);

// friends.unshift("Nick"); //Add to the first index of the array
// console.log(friends);

//remove element from array

// friends.pop();
// console.log(friends);

// friends.shift(); //remove first element
// console.log(friends);

// console.log(friends.indexOf("Robin"));
// console.log(friends.indexOf("saif"));

// console.log(friends.includes("Oli"));
// console.log(friends.includes("Saif"));

// if (friends.includes("Antu")) {
//   console.log("You have a friend called Antu");
// }

//Coding challenge 2 array

// const calcTip = (billValue) => {
//   const fifteenPercentTip = billValue * (15 / 100);
//   const twentyPercentTip = billValue * (20 / 100);

//   if (billValue >= 50 && billValue <= 300) {
//     const tip = fifteenPercentTip;
//     return tip;
//   } else {
//     return (tip = twentyPercentTip);
//   }
// };

// const bills = [125, 555, 44];
// console.log(bills[0]);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);

//js objects

// const oli = {
//   firstName: "oli",
//   lastName: "ullah",
//   age: 2023 - 1996,
//   profession: "Software Engineer",
//   friends: ["Nick", "robin", "antu"],
// };

// console.log(oli.firstName);
// console.log(oli["lastName"]);

// const nameKey = "Name";

// console.log(oli["first" + nameKey]);
// console.log(oli["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about oli? Choose between first name, last name, age, profession, friends"
// );

// console.log(oli[interestedIn]);

// oli.location = "bangladesh";
// oli.twitter = "oliullah_Jewel";

// console.log(oli);

// console.log(
//   `oli has ${oli.friends.length} friends and his best friend is ${oli.friends[0]}`
// );
// const oli = {
//   firstName: "oli",
//   lastName: "ullah",
//   age: 2023 - 1996,
//   profession: "Software Engineer",
//   friends: ["Nick", "robin", "antu"],
//   hasDriverLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },
//   calcAge: function () {
//     console.log(this.age);
//     return this.age;
//   },
//   getSummary: function () {
//     if (this.hasDriverLicense) {
//       return `${this.firstName} is a ${this.age} old ${this.profession}. He has a driver license`;
//     } else {
//       return `${this.firstName} is a ${this.age} old ${this.profession}. He has no driver license`;
//     }
//   },
// };

// console.log(oli.calcAge());
// console.log(oli.getSummary());

//coding challenge 3 object

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     console.log(this.BMI);
//     return this.BMI;
//   },
// };
// const mark = {
//   fullName: "Mark Miller",
//   mass: 75,
//   height: 1.72,

//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// const compareBMI =
//   mark.BMI > john.BMI
//     ? `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI}) `
//     : `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`;

// console.log(compareBMI);

//loop

// const oli = [
//   "Oli",
//   "Ullah",
//   2023 - 1996,
//   "Software Engineer",
//   (friends = ["Robin", "Antu", "Nick"]),
// ];

// let types = [];

// for (let i = 0; i < oli.length; i++) {
//   //Reading array
//   console.log(oli[i]);

//   //filling array
//   //   types[i] = typeof oli[i];
//   types.push(typeof oli[i]);
// }
// console.log(types);

// console.log("----ONLY STRINGS-----");
// for (let i = 0; i < oli.length; i++) {
//   if (typeof oli[i] !== "string") continue;
//   console.log(oli[i], typeof oli[i]);
// }

// for (let i = 0; i < oli.length; i++) {
//   if (typeof oli[i] == "number") break;
//   console.log(oli[i], typeof oli[i]);
// }

//Coding challenge for loop

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = (billValue) => {
  const fifteenPercentTip = billValue * (15 / 100);
  const twentyPercentTip = billValue * (20 / 100);

  if (billValue >= 50 && billValue <= 300) {
    const tip = fifteenPercentTip;
    return tip;
  } else {
    return (tip = twentyPercentTip);
  }
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals[i] = tips[i] + bills[i];
}

console.log(tips);
console.log(totals);

const calcAverage = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  let average = sum / arr.length;
  return average;
};

let finalAverageValue = calcAverage(bills);
console.log(finalAverageValue);
