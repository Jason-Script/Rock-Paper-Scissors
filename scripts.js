let playerScore = 0;
let computerScore = 0;

let moveSelector = document.querySelector("#move-selector");

let rock = document.querySelector("#rock");
rock.value = "rock";

let paper = document.querySelector("#paper");
paper.value = "paper";

let scissors = document.querySelector("#scissors");
scissors.value = "scissors";

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

// Initiate a single round of the game and increment score of round winner.
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    
    console.log("The computer has chosen " + computerChoice);

    if (computerChoice === playerChoice.value) {
        console.log("Draw!");
    } else if 
        (  computerChoice === "rock" && playerChoice.value === "scissors"
        || computerChoice === "paper" && playerChoice.value === "rock"
        || computerChoice === "scissors" && playerChoice.value === "paper"
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

moveSelector.addEventListener("click", (event) => {
    if (event.target.id == "rock") {
        playRound(rock);
    } else if (event.target.id == "paper") {
        playRound(paper);
    } else if (event.target.id == "scissors") {
        playRound(scissors);
    }
});