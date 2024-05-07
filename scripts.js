let playerScore = 0;
let computerScore = 0;

let moveSelector = document.querySelector("#move-selector");

let rock = document.querySelector("#rock");
rock.value = "rock";

let paper = document.querySelector("#paper");
paper.value = "paper";

let scissors = document.querySelector("#scissors");
scissors.value = "scissors";

let pScore = document.querySelector("#player-score");
let oScore = document.querySelector("#opp-score");

let playerMove = document.querySelector("#player-move");
let opponentMove = document.querySelector("#opponent-move");

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
        playerMove.src = `./images/${playerChoice.value}.webp`;
        opponentMove.src = `./images/${computerChoice}.webp`;
        let roundWon = "draw";
        declareWinner(roundWon);
        setTimeout(() => {
            playerMove.classList.add("loss-animation");
            opponentMove.classList.add("loss-animation");
        }, 500);
        setTimeout(() => {
            playerMove.classList.remove("loss-animation");
            opponentMove.classList.remove("loss-animation");
            opponentMove.src = `./images/question.webp`
            playerMove.src = `./images/question.webp`
        }, 1500);
    } else if 
        (  computerChoice === "rock" && playerChoice.value === "scissors"
        || computerChoice === "paper" && playerChoice.value === "rock"
        || computerChoice === "scissors" && playerChoice.value === "paper"
        ) {
        computerScore++;
        oScore.textContent = `Opponent score: ${computerScore}`;
        pScore.textContent = `Player score: ${playerScore}`;
        playerMove.src = `./images/${playerChoice.value}.webp`;
        opponentMove.src = `./images/${computerChoice}.webp`;
        let roundWon = "lose";
        declareWinner(roundWon);
        setTimeout(() => {
            playerMove.classList.add("loss-animation");
        }, 500)
        setTimeout(() => {
            playerMove.classList.remove("loss-animation");
            playerMove.src = `./images/question.webp`
        }, 1500);
        oScore.classList.add("increment-score");
        setTimeout(() => {
            oScore.classList.remove("increment-score");
        }, 200);
    } else if (playerChoice == undefined) {
        console.log("You have chosen an invalid move, please try again.");
    } else {
        playerScore++;
        oScore.textContent = `Opponent score: ${computerScore}`;
        pScore.textContent = `Player score: ${playerScore}`;
        playerMove.src = `./images/${playerChoice.value}.webp`;
        opponentMove.src = `./images/${computerChoice}.webp`;
        let roundWon = "win";
        declareWinner(roundWon);
        setTimeout(() => {
            opponentMove.classList.add("loss-animation");
        }, 500)
        setTimeout(() => {
            opponentMove.classList.remove("loss-animation");
            opponentMove.src = `./images/question.webp`
        }, 1500);
        pScore.classList.add("increment-score");
        setTimeout(() => {
            pScore.classList.remove("increment-score");
        }, 200);
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

function declareWinner(roundWon) {
    if (roundWon == "win") {
        document.getElementById("winner-declaration").textContent = "You have won the round!";
    } else if (roundWon == "lose") {
        document.getElementById("winner-declaration").textContent = "You have lost the round!";
    } else if (roundWon == "draw") {
        document.getElementById("winner-declaration").textContent = "Draw!";
    }
}