"use strict";

let scoreZero = document.querySelector("#score--0");
let scoreOne = document.querySelector("#score--1");
let dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const currentZero = document.getElementById("current--0");
const currentOne = document.getElementById("current--1");
const playerActive = document.querySelector(".player--active");
const playerZero = document.querySelector(".player--0");
const playerOne = document.querySelector(".player--1");
scoreZero.textContent = 0;
scoreOne.textContent = 0;
dice.classList.add("hidden");

const scores = [0, 0];
let sum = 0;
let activePlayer = 0;
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
    document.getElementById(`current--${activePlayer}`).textContent = sum;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    sum = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
  }
  if (activePlayer === 1) {
    playerZero.classList.remove("player--active");
    playerOne.classList.add("player--active");
  } else {
    playerOne.classList.remove("player--active");
    playerZero.classList.add("player--active");
  }
};

// let randomDiceNumber = rollDice();

// const addToCurrentScore = (numberToAdd) => {
//   let sum = 0;
//   sum = sum + numberToAdd;
//   currentZero.textContent = sum;
// };

btnRoll.addEventListener("click", rollDice);
