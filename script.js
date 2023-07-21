function getComputerChoice() {
    /** Generate a number between 1 and 3 */
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);

    /** Initialize returnedChoice string */
    let returnedChoice = '';

    /** Convert random number to relevant string */
    if (computerChoice === 1) {
        returnedChoice = 'Rock';
    } else if (computerChoice === 2) {
        returnedChoice = 'Paper';
    } else {
        returnedChoice = 'Scissors'
    }

    console.log(returnedChoice);
    /** Return the randomly chosen string */
    return returnedChoice;
}

/** Prompt player to choose Rock, Paper, Scissors */
let playerSelection = prompt("Rock, Paper, or Scissors?");
/** Convert player input string to lowercase for standardization */
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

getComputerChoice();