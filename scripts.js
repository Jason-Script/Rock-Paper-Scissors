function getComputerChoice(computerChoice) {
    computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice <= 32) {
        computerChoice = "Rock";
        return computerChoice;
    } else if (computerChoice <= 66 && computerChoice>= 33) {
        computerChoice = "Paper";
        return computerChoice;
    } else {
        computerChoice = "Scissors";
        return computerChoice;
    }
}

function getHumanChoice(playerChoice) {
    playerChoice = prompt("Rock, Paper, or Scissors?");
    if (playerChoice === "Rock" || playerChoice === "rock") {
        playerChoice = "Rock";
        return playerChoice;
    } else if (playerChoice === "Paper" || playerChoice === "paper") {
        playerChoice = "Paper";
        return playerChoice;
    } else if (playerChoice === "Scissors" || playerChoice === "scissors") {
        playerChoice = "Scissors";
        return playerChoice;
    } else {
        alert("Illegal move! Please try again.");
    }
}