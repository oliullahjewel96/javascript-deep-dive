"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

const displayMovement = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
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
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
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
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount = inputTransferTo = "";

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
