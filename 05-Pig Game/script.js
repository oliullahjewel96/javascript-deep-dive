"use strict";

let scoreZero = document.querySelector("#score--0");
let scoreOne = document.querySelector("#score--1");
let dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const currentZero = document.querySelector("#current--0");
const playerActive = document.querySelector(".player");
const playerZero = document.querySelector(".player--0");
const playerOne = document.querySelector(".player--1");

scoreZero.textContent = 0;
scoreOne.textContent = 0;
dice.classList.add("hidden");
let sum = 0;
let rollDice = () => {
  //generate random number
  let randomNumber = Math.trunc(Math.random() * 6 + 1);

  console.log(randomNumber);
  //display dice element corresponding to the random number
  dice.classList.remove("hidden");
  dice.src = `dice-${randomNumber}.png`;
  //check for rolled 1
  if (randomNumber !== 1) {
    //Add to current number
    sum = sum + randomNumber;
    currentZero.textContent = sum;
  } else {
    //switch to next player
  }
};

// let randomDiceNumber = rollDice();

// const addToCurrentScore = (numberToAdd) => {
//   let sum = 0;
//   sum = sum + numberToAdd;
//   currentZero.textContent = sum;
// };

btnRoll.addEventListener("click", rollDice);
