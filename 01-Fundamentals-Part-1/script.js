/*let js = "amazing";

console.log(40 + 8 + 23 - 10);

let firstName = "oli";
let last_name = "Ullah";
let birthYear96 = "june, 17, 1996";
let income$ = 200;
let isCitizenOfBangladesh = true;

let year;

console.log(typeof firstName);
console.log(typeof last_name);
console.log(typeof birthYear96);
console.log(typeof income$);
console.log(typeof isCitizenOfBangladesh);
console.log(typeof year);
console.log(typeof null);*/

//Arithmetic operators
// const currentAgeYear = 2022;
// const ageRobin = currentAgeYear - 1995;
// const ageOli = currentAgeYear - 1996;

// console.log(ageRobin, ageOli, ageOli * 2, ageRobin / 2);

// //Assignment operators

// let x = 10 + 5;
// x += 15;
// x *= 10;
// x -= 11;
// x++;
// x--;
// console.log(x);

// //comparison operators

// let age = ageRobin > ageOli;
// console.log(age);

//coding challenge

// const marksMass = 78;
// const johnsMass = 92;
// let marksHeight = 1.69;
// let johnsHeight = 1.95;

// let marksBMI = marksMass / (marksHeight * marksHeight);

// let johnsBMI = johnsMass / (johnsHeight * johnsHeight);

// let markHigherBMI = marksBMI > johnsBMI;

// if (markHigherBMI) {
//   console.log(`Marks BMI: ${marksBMI} is higher than John's BMI ${johnsBMI}`);
// } else {
//   console.log(`Johns BMI: ${johnsBMI} is higher than Mark's BMI ${marksBMI}`);
// }

// console.log(markHigherBMI);

//template literal

// const firstName = "oli";
// const job = "IT Engineer";
// const birthYear = 1996;
// const currentYear = 2022;

// const oli = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}`;

// console.log(oli);

//Type conversion and coercion

// let inputYear = "1996";

// console.log(Number(inputYear), inputYear);

// console.log(String(23));

// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1;
// n = n + 1;
// console.log(n);

// Truthy and falsy values

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 0;

// if (money) {
//   console.log("Don't spend it at all");
// } else {
//   console.log("Get a job");
// }

//coding challenge 3

// const scoreOneDolphine = 55;
// const scoreTwoDolphine = 56;
// const scoreThreeDolphine = 58;
// const scoreOneKoalas = 77;
// const scoreTwoKoalas = 40;
// const scoreThreeKoalas = 22;
// const minimumScore = 100;
// const averageScoreOfDolphines =
//   (scoreOneDolphine + scoreTwoDolphine + scoreThreeDolphine) / 3;
// const averageScoreOfKoalas =
//   (scoreOneKoalas + scoreTwoKoalas + scoreThreeKoalas) / 3;

// if (
//   averageScoreOfDolphines > averageScoreOfKoalas &&
//   averageScoreOfDolphines >= minimumScore
// ) {
//   console.log("Team Dolphines are the winners");
// } else if (
//   averageScoreOfDolphines === averageScoreOfKoalas &&
//   averageScoreOfDolphines >= minimumScore &&
//   averageScoreOfKoalas >= minimumScore
// ) {
//   console.log("The competition is a draw");
// } else if (
//   averageScoreOfKoalas > averageScoreOfDolphines &&
//   averageScoreOfKoalas >= minimumScore
// ) {
//   console.log("Team Koalas are the winners");
// } else {
//   console.log("No one wins the trophy");
// }

//Coding challenge 3

// let billValue = 201;
// const tipFifteenPercent = billValue * (15 / 100);
// const tipTwentyPercent = billValue * (20 / 100);

// const tip =
//   billValue >= 50 && billValue <= 300 ? tipFifteenPercent : tipTwentyPercent;

// console.log(
//   `The bill was ${billValue}, the tip was ${tip}, and the total value is ${
//     billValue + tip
//   }`
// );
