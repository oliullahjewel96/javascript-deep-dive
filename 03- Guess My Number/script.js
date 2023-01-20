"use strict";

let message = document.querySelector(".message");

// message.textContent = "Correct Number!";

// console.log(message, typeof message);

//document.querySelector(".number");
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let chkButton = document.querySelector(".check");
let againBtn = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
chkButton.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "No Number!";
  } else if (guess === secretNumber) {
    console.log(secretNumber);
    //document.querySelector(".message").textContent = "CORRECT NUMBER!";
    displayMessage("CORRECT NUMBER!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost the game");
    }
  }
  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too High!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost the game";
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too Low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost the game";
  //     }
  //   }
});

againBtn.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
