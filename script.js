/*
let playerScore = 0;
let computerScore = 0;

const game = function () {
  for (let i = 0; i <= 4; i++) {
    console.log(`Round ${i + 1}`);

    /////////////////////////////////////////////////// COMPUTER PLAY FUNCTION ////////////////////////////////////////////////////////////////

    const computerPlay = function () {
      const randomC = Math.floor(Math.random() * 3) + 1;
      let cWeapon = "";
      if (randomC === 1) {
        cWeapon = "rock";
        return cWeapon;
      } else if (randomC === 2) {
        cWeapon = "paper";
        return cWeapon;
      } else if (randomC === 3) {
        cWeapon = "scissors";
        return cWeapon;
      }
    };

    /////////////////////////////////////////////////// PLAY ROUND FUNCTION ////////////////////////////////////////////////////////////////

    const playerSelection = prompt("choose your weapon").toLowerCase();
    const computerSelection = computerPlay();

    const playRound = function (playerSelection, computerSelection) {
      if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Its a Draw!");
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer Wins ! Paper beats Rock");
        return (computerScore = +computerScore + 1);
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
        console.log("Player Wins! Rock beats Scissors");
        return (playerScore = playerScore + 1);
      } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Its a Draw!");
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
      ) {
        console.log("Computer Wins ! Scissors beats Paper");
        return (computerScore = +computerScore + 1);
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player Wins! Paper beats Rock");
        return (playerScore = playerScore + 1);
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "scissors"
      ) {
        console.log("Its a Draw!");
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "rock"
      ) {
        console.log("Computer Wins ! Rock beats Scissors");
        return (computerScore = +computerScore + 1);
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
      ) {
        console.log("Player Wins! Scissors beats Paper");
        return (playerScore = playerScore + 1);
      }
    };

    playRound(playerSelection, computerSelection);
    console.log(`The score is Player:${playerScore} Computer:${computerScore}`);
  }
};

game();

if (playerScore > computerScore) {
  console.log("Player Wins!");
} else if (playerScore < computerScore) {
  console.log("Computer Wins!");
} else if (playerScore === computerScore) {
  console.log("Its a TIE!!");
}

*/

const computerPlay = function () {
  const randomC = Math.floor(Math.random() * 3) + 1;
  let cWeapon = "";
  if (randomC === 1) {
    cWeapon = "rock";
    return cWeapon;
  } else if (randomC === 2) {
    cWeapon = "paper";
    return cWeapon;
  } else if (randomC === 3) {
    cWeapon = "scissors";
    return cWeapon;
  }
};
let playerSelection = "";
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

// console.log(playerSelection, computerSelection);
const results = document.querySelector(".results");

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    results.textContent = "Its a Draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    results.textContent = "Computer Wins ! Paper beats Rock";
    return (computerScore = +computerScore + 1);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    results.textContent = "Player Wins! Rock beats Scissors";
    return (playerScore = playerScore + 1);
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    results.textContent = "Its a Draw!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    results.textContent = "Computer Wins ! Scissors beats Paper";
    return (computerScore = +computerScore + 1);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    results.textContent = "Player Wins! Paper beats Rock";
    return (playerScore = playerScore + 1);
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    results.textContent = "Its a Draw!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    results.textContent = "Computer Wins ! Rock beats Scissors";
    return (computerScore = +computerScore + 1);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    results.textContent = "Player Wins! Scissors beats Paper";
    return (playerScore = playerScore + 1);
  }
};

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissor = document.querySelector(".scissor");

btnRock.addEventListener("click", function () {
  playerSelection = "rock";
  playRound(playerSelection, computerPlay());
});
btnPaper.addEventListener("click", function () {
  playerSelection = "paper";
  playRound(playerSelection, computerPlay());
});
btnScissor.addEventListener("click", function () {
  playerSelection = "scissors";
  playRound(playerSelection, computerPlay());
});

// let testing = 2 + 2;

// const score = document.querySelector(".score");
// score.textContent = `hey here is the score ${testing}`;
