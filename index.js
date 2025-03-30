let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll(".button");
const result = document.querySelector(".results");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    playGame(btn.innerHTML.toLowerCase());
  });
});

function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3);
  return options[computer];
}

function playRound(humanChoice, computerChoice) {
  const p2 = document.querySelector(".track");
  const draw = document.querySelector(".draw");

  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      computerScore++;
      draw.textContent = "";
    } else if (computerChoice == "scissors") {
      draw.textContent = "";
      humanScore++;
    } else {
      draw.textContent = "Draw!";
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      draw.textContent = "";
      humanScore++;
    } else if (computerChoice == "paper") {
      draw.textContent = "Draw!";
    } else {
      draw.textContent = "";
      computerScore++;
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      draw.textContent = "";
      computerScore++;
    } else if (computerChoice == "paper") {
      draw.textContent = "";
      humanScore++;
    } else {
      draw.textContent = "Draw!";
    }
  }
  p2.textContent = humanScore + "x" + computerScore;
}

let end = 0;
function playGame(humanChoice) {
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  const p = document.createElement("p");

  if (end >= 1) {
    return 0;
  }

  if (humanScore == 5) {
    p.textContent = "Human Wins! " + humanScore + "x" + computerScore;
    result.appendChild(p);
    end++;
    return 0;
  } else if (computerScore == 5) {
    p.textContent = "Computer Wins! " + computerScore + "x" + humanScore;
    result.appendChild(p);
    end++;
    return 0;
  }
}
