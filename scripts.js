function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100);
    if (choice <= 32) {
        choice = "Rock";
        return choice;
    } else if (choice <= 66 && choice >= 33) {
        choice = "Paper";
        return choice;
    } else {
        choice = "Scissors";
        return choice;
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")
}