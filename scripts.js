let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice <= 32) {
        computerChoice = "rock";
        return computerChoice;
    } else if (computerChoice <= 66 && computerChoice>= 33) {
        computerChoice = "paper";
        return computerChoice;
    } else {
        computerChoice = "scissors";
        return computerChoice;
    }
}

function getPlayerChoice() {
    let playerChoice
    do {
        playerChoice = prompt("Rock, Paper, or Scissors?");
        if (playerChoice.toLowerCase() === "rock"
        || playerChoice.toLowerCase() === "paper"
        || playerChoice.toLowerCase() === "scissors") {
            return playerChoice.toLowerCase();
        } else {
            alert("Invalid move! Please try again.");
        }
    } while (true);
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    
    console.log("The computer has chosen " + computerChoice);
    console.log("You have chosen " + playerChoice);

    if (computerChoice === playerChoice) {
        console.log("Draw!");
    } else if 
        (  computerChoice === "rock" && playerChoice === "scissors"
        || computerChoice === "paper" && playerChoice === "rock"
        || computerChoice === "scissors" && playerChoice === "paper"
        ) {
        console.log("You lost!")
        computerScore++;
        console.log("Computer score: " + computerScore);
    } else if (playerChoice == undefined) {
        console.log("You have chosen an invalid move, please try again.");
    } else {
        console.log("You win!");
        playerScore++;
        console.log("Your score is now: " + playerScore);
    }
    }

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log("The score is " + playerScore + " to " + computerScore + ", you have won the match!");
    } else if (playerScore < computerScore) {
        console.log("The score is " + playerScore + " to " + computerScore + ", you have lost the match!");
    } else {
        console.log("The score is " + playerScore + " to " + computerScore + ", the match is a draw!");
    }
}