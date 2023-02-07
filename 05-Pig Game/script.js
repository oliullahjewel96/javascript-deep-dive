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
const holdButton = document.querySelector(".btn--hold");
const buttonNew = document.querySelector(".btn--new");

let scores, sum, activePlayer, isPlaying;
const init = () => {
  scores = [0, 0];
  sum = 0;
  activePlayer = 0;
  isPlaying = true;

  scoreZero.textContent = 0;
  scoreOne.textContent = 0;
  currentZero.textContent = 0;
  currentOne.textContent = 0;
  dice.classList.add("hidden");
  playerZero.classList.remove("player--winner");
  playerOne.classList.remove("player--winner");
  playerZero.classList.add("player--active");
  playerOne.classList.remove("player--active");
};

init();
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  sum = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle("player--active");
  playerOne.classList.toggle("player--active");
};
let rollDice = () => {
  if (isPlaying) {
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
      switchPlayer();
    }
  }
};

const holdDice = () => {
  if (isPlaying) {
    //Add current score to active player score's
    scores[activePlayer] += sum;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log(scores);
    //check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      isPlaying = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
};

const newGame = () => {
  init();
};

btnRoll.addEventListener("click", rollDice);
holdButton.addEventListener("click", holdDice);
buttonNew.addEventListener("click", newGame);
