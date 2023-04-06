"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const accountOne = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const accountTwo = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

// console.log(23 === 23.0);
// console.log(+"23"); //type coercion

//parsing
// console.log(Number.parseInt("30px"));
// console.log(Number.parseFloat("2.5rem"));

// console.log(Number.isNaN(20));
// console.log(Number.isNaN("20"));
// console.log(Number.isNaN(+"20x"));

//checking if a value is a number

// console.log(Number.isFinite(20));
// console.log(Number.isFinite("20"));

// console.log(Math.sqrt(25));
// console.log(Math.max(5, 18, 3, 323, 35, 556, 6));
// console.log(Math.min(5, 18, 3, 323, 35, 556, 6));

// console.log(Math.PI * Number.parseFloat("10px") ** 2);
// console.log(Math.floor(Math.random() * 6) + 1);

// //Rounding integers
// console.log(Math.trunc(23.3));

// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// //Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.2345).toFixed(2));

//EVEN and ODD

//BIG int

// console.log(328683765238759272333979275982375987n);
// console.log(10000000000000000000000n + 10000000000000000000000000n);

//DATES

//4 ways of creating dates in js

/*const now = new Date();
console.log(now);

console.log(new Date("Tue Apr 04 2023 14:51:41"));
console.log(new Date(2023, 3, 4, 14, 55, 14));
*/

// const future = new Date(2024, 3, 4, 14, 55, 14);

// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());
// console.log(Date.now()); //gives timestamp

//
//
//
//
//
//
//
// Data
//
//
//
//
//
//
//

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = ` 
    <div class="movements__row">
       <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
       <div class="movements__date">3 days ago</div>
       <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;
  const withdraw = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdraw)}€`;
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsername(accounts);
const updateUI = function (acc) {
  //Display movements
  displayMovement(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
};
//Event handler
let currentAccount;

//Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input field
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    //update UI
    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI

    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // console.log(index);
    //Delete User
    accounts.splice(index, 1);
    //HIDE UI
    containerApp.style.opacity = 0;
  }
  //Clear the fields
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value} ${map}`);
// });

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log("------FOREACH LOOP------");

// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
/////////////////////////////////////////////////

// const arr = ["a", "b", "c", "d", "e"];

//SLICE method
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr.slice()); //shallow copy of an array

//SPLICE method

// console.log(arr.splice(2));
// console.log(arr);

//REVERSE method

// console.log(arr.reverse());

//CONCAT method

// const arr2 = ["g", "h", "i", "j", "k"];
// const letters = arr.concat(arr2);
// console.log(arr.concat(arr2));

//JOIN method

// console.log(letters.join("-"));

// at method

// const arr = [23, 22, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr.at(-1));

//coding challenge

// const checkDogs = function (dogsJulia, dogsKate) {
//   dogsJulia.slice();
//   console.log(dogsJulia);
//   const juliaCorrected = dogsJulia.slice(1, 3);
//   const newArr = [...juliaCorrected, ...dogsKate];

//   console.log(newArr);
//   newArr.forEach(function (age, i) {
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1} is a ${age} years old adult`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };

// const owner1 = [9, 1, 3, 5, 7];
// const owner2 = [8, 1, 3, 5, 6];

// checkDogs(owner1, owner2);

//MAP method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;

// const movementsUSD = movements.map((mov) => mov * euroToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const moveDescriptions = movements.map(
//   (
//     mov,
//     i,
//     arr //{
//   ) =>
//     // if (mov > 0) {
//     //   return `Movement ${i + 1}: You deposited ${mov}`;
//     // } else {
//     //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//     // }
//     `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
//       mov
//     )}`
//   //}
// );

// console.log(moveDescriptions);

//FILTER method

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);
// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(movements);
// console.log(withdrawals);

//REDUCE method

// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr;
// }, 0);

// console.log(balance);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Maximum value

// const max = movements.reduce(function (acc, mov) {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(max);

//coding challenge 2

// const calcAverageHumanAge = function (ages) {
//   let humanYears = ages.map((dog) => {
//     if (dog <= 2) {
//       return 2 * dog;
//     } else {
//       return 16 + dog * 4;
//     }
//   });
//   console.log(`Human Years: ${humanYears}`);
//   let excludeDogs = humanYears.filter((dog) => {
//     if (dog > 18) {
//       return dog;
//     }
//   });
//   console.log(`Exclude Dogs: ${excludeDogs}`);
//   let averageHumanAge =
//     excludeDogs.reduce((acc, dog) => acc + dog, 0) / excludeDogs.length;
//   return averageHumanAge;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1);
// console.log(avg2);

//Array method chaining
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

//coding challenge 3

// const calcAverageHumanAge = (ages) => {
//   let humanYears = ages
//     .map((dog) => {
//       if (dog <= 2) {
//         return 2 * dog;
//       } else {
//         return 16 + dog * 4;
//       }
//     })
//     .filter((dog) => {
//       if (dog > 18) {
//         return dog;
//       }
//     })
//     .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);

//   console.log(humanYears);
//   return humanYears;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//FIND method()
//find method returns only the first element which satisfy the condition

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find((mov) => mov < 0);

// console.log(firstWithdrawal);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //EQUALITY

// console.log(movements.includes(-130));

// //SOME: CONDITION

// const anyDeposits = movements.some((mov) => mov > 5000);

// console.log(anyDeposits);

//EVERY

// console.log(movements.every((mov) => mov > 0));

// //Separate callback

// const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//FLAT method

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance);

// //flatMap method

// const overallBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance2);

//SORT method

//string
// const owners = ["oli", "robin", "antu", "saif"];
// console.log(owners.sort());
// console.log(owners);

//Numbers

//if we return <0, then A will be before B
//if we return >0, then B will be before A

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

// //descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

// console.log(movements); //mutated

// const bankDeposits = accounts
//   .flatMap((acc) => acc.movements)
//   // .flat()
//   .filter((mov) => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(bankDeposits);

// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

// console.log(numDeposits1000);

// const sums = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(sums);

// const convertTitleCase = function (title) {
//   const exception = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
//   const titleCase = title
//     .toLocaleLowerCase()
//     .split(" ")
//     .map((word) => (exception.includes(word) ? word : capitalize(word)))
//     .join(" ");

//   return capitalize(titleCase);
// };

// console.log(convertTitleCase("this is a nice title"));
// console.log(convertTitleCase("this is a LONG title but not too long"));
// console.log(convertTitleCase("and here is another title with an EXAMPLE"));

/* Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).



HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:

*/

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

//Question 1
//  Loop over the array containing dog objects, and for each dog, calculate
//  the recommended food portion and add it to the object as a new property.
//  Do NOT create a new array, simply loop over the array.
//  Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// const foodPortion = dogs.forEach((dog) => {
//   let recommendedFood = dog.weight ** 0.75 * 28;
//   dog.recommendedFood = recommendedFood;
// });

// console.log(dogs);

//question 2
//  Find Sarah's dog and log to the console whether it's eating
//  too much or too little. HINT: Some dogs have multiple owners,
//  so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));

// console.log(dogSarah);

//Question 3
// Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch')
// and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recommendedFood)
//   .map((dog) => dog.owners)
//   .flat();

// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recommendedFood)
//   .map((dog) => dog.owners)
//   .flat();

// console.log(ownersEatTooLittle);

//Question 4

// Log a string to the console for each array created in 3., like this:
// "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// console.log(`${ownersEatTooMuch.join(" and ")}s dogs eat too much`);
// console.log(`${ownersEatTooLittle.join(" and ")}s dogs eat too little`);

//Question 5

// Log to the console whether there is any dog eating EXACTLY
// the amount of food that is recommended (just true or false)

// console.log(dogs.some((dog) => dog.curFood > dog.recommendedFood));

//question 6

//Log to the console whether there is any dog eating
//an OKAY amount of food (just true or false)

// console.log(
//   dogs.some(
//     (dog) =>
//       dog.curFood > dog.recommendedFood * 0.9 &&
//       dog.curFood < dog.recommendedFood * 1.1
//   )
// );

//question 7

//Create an array containing the dogs that are
//eating an OKAY amount of food (try to reuse the
//condition used in 6.)

// const okayEatingDogs = (dog) =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;

// console.log(dogs.filter(okayEatingDogs));

//question 8

//Create a shallow copy of the dogs array and sort it by recommended
//food portion in an ascending order (keep in mind that the portions
//are inside the array's objects)

// const dogsSorted = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);

// console.log(dogsSorted);

// labelBalance.addEventListener("click", function () {
//   [...document.querySelectorAll(".movements__row")].forEach((row, i) => {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = "grey";
//     }
//     if (i % 2 !== 0) {
//       row.style.backgroundColor = "red";
//     }
//   });
// });
