"use strict";

let message = document.querySelector(".message");

// message.textContent = "Correct Number!";

// console.log(message, typeof message);

//document.querySelector(".number");
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let chkButton = document.querySelector(".check");

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".number").textContent = secretNumber;

console.log(secretNumber);
chkButton.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "No Number!";
  } else if (guess === secretNumber) {
    console.log(secretNumber);
    document.querySelector(".message").textContent = "CORRECT NUMBER!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game";
    }
  }
});
