for (let i = 0; i <= 5; i++) {
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

  const playerSelection = prompt("choose your weapon").toLocaleLowerCase();
  const computerSelection = computerPlay();

  const playRound = function (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
      console.log("Its a Draw!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("Computer Wins ! Paper beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("Player Wins! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      console.log("Its a Draw!");
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      console.log("Computer Wins ! Scissors beats Paper");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("Player Wins! Paper beats Rock");
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "scissors"
    ) {
      console.log("Its a Draw!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("Computer Wins ! Rock beats Scissors");
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      console.log("Player Wins! Scissors beats Paper");
    }
  };

  playRound(playerSelection, computerSelection);
}
