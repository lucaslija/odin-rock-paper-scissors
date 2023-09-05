/** Variables */
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const playerDisplay = document.getElementById("player-score");
const cpuDisplay = document.getElementById("computer-score");
const outcomeP = document.getElementById("outcome");

let playerScore = 0;
let computerScore = 0;

/** Randomly generate computer choice */
function getComputerChoice() {
    /** Generate a number between 1 and 3 */
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    /** Initialize returnedChoice string */
    let returnedChoice = '';

    /** Convert random number to relevant string */
    if (computerChoice === 1) {
        returnedChoice = 'rock';
    } else if (computerChoice === 2) {
        returnedChoice = 'paper';
    } else {
        returnedChoice = 'scissors'
    }
    /** Return the randomly chosen string */
    return returnedChoice;
}

/** Play a single round of Rock, Paper, Scissors */
function playRound(playerSelection) {
    let outcomeString = '';
    const computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        outcomeString = "It's a tie! Play again.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        outcomeString = "You lose! Paper beats Rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        outcomeString = "You win! Rock beats Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        outcomeString = "You win! Paper beats Rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        outcomeString = "You lose! Scissors beats Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        outcomeString = "You lose! Rock beats Scissors.";
    } else {
        outcomeString = "You win! Scissors beats Paper.";
    }

    outcomeP.innerHTML = "<h1>" + outcomeString + "</h1>";
}

rockBtn.addEventListener('click', () => {
    playRound('rock');
});

paperBtn.addEventListener('click', () => {
    playRound('paper');
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
});