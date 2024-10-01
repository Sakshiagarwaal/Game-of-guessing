let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".change").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "rgb(49 34 126)";
});

document.querySelector(".More").addEventListener("click", function () {
  displaymessage("nothing ");
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    displaymessage("Insert a Value 🧐");
  } else if (guess === secretNumber) {
    displaymessage("you are correct 🥳");
    document.querySelector("body").style.backgroundColor = "#a22727";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(
        guess > secretNumber ? "Its too high 📈!" : "Its too low 📉!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymessage("oops! you lost 😪");
      document.querySelector(".score").textContent = 0;
    }
  }

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".guess").value = null;

    displaymessage("start guessing😃...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
  });
  if (guess < 1) {
    displaymessage("Plzz choose value between 1 to 20");
  }
});
