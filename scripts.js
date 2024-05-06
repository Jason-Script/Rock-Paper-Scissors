let playerScore = 0;
let computerScore = 0;

// Generates a random number, and assigns the computer a move depending on the number.
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

// Assigns one of 3 moves to the player with a prompt entry.
// function will repeat if an invalid entry is made.
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

// Initiate a single round of the game and increment score of round winner.
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
        console.log("You lose!")
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

// Initiate a sequence of 5 rounds to be played, incrementing score after each round
// and declaring a winner at the end.

/* function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log("The score is " + playerScore + " to " + computerScore +
            ", you have won the match!");
    } else if (playerScore < computerScore) {
        console.log("The score is " + playerScore + " to " + computerScore +
            ", you have lost the match!");
    } else {
        console.log("The score is " + playerScore + " to " + computerScore +
            ", the match is a draw!");
    }
} */