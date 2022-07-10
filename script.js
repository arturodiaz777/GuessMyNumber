"use strict";

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const checkFunction = function () {
  if (document.querySelector(".number").textContent === "?") {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess || guess > 20 || guess < 0) {
      document.querySelector(".message").textContent =
        "😒 Is between 1 and 20!";
    } else if (guess === randomNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "🙊 Correct Number! ";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = randomNumber;
        document.querySelector(".highscore").textContent =
          document.querySelector(".score").textContent >
          document.querySelector(".highscore").textContent
            ? document.querySelector(".score").textContent
            : document.querySelector(".highscore").textContent;
      }
    } else if (guess !== randomNumber) {
      if (score > 1) {
        displayMessage(guess > randomNumber ? "👆 Too high!" : "👇 Too low!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("💥 You lost the game!");
        document.querySelector(".score").textContent = 0;
      }
    }
  }
};
const againFunction = () => {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
};
document.querySelector(".check").addEventListener("click", checkFunction);
document.querySelector(".again").addEventListener("click", againFunction);
