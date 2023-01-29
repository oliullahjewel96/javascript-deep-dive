"use strict";

let scoreZero = document.querySelector("#score--0");
let scoreOne = document.querySelector("#score--1");
let dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const currentZero = document.querySelector("#current--0");

scoreZero.textContent = 0;
scoreOne.textContent = 0;
dice.classList.add("hidden");

const rollDice = () => {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNumber);
  if (randomNumber === 1) {
    dice.classList.remove("hidden");
    dice.src = "dice-1.png";
  } else if (randomNumber === 2) {
    dice.classList.remove("hidden");
    dice.src = "dice-2.png";
  } else if (randomNumber === 3) {
    dice.classList.remove("hidden");
    dice.src = "dice-3.png";
  } else if (randomNumber === 4) {
    dice.classList.remove("hidden");
    dice.src = "dice-4.png";
  } else if (randomNumber === 5) {
    dice.classList.remove("hidden");
    dice.src = "dice-5.png";
  } else {
    dice.classList.remove("hidden");
    dice.src = "dice-6.png";
  }
};

// let randomDiceNumber = rollDice();

// const addToCurrentScore = (numberToAdd) => {
//   let sum = 0;
//   sum = sum + numberToAdd;
//   currentZero.textContent = sum;
// };

btnRoll.addEventListener("click", rollDice);
