function getComputerChoice() {
    /** Generate a number between 1 and 3 */
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);

    let returnedChoice = '';

    if (computerChoice === 1) {
        returnedChoice = 'Rock';
    } else if (computerChoice === 2) {
        returnedChoice = 'Paper';
    } else {
        returnedChoice = 'Scissors'
    }

    console.log(returnedChoice);
    return returnedChoice;
}

let playerSelection = prompt("Rock, Paper, or Scissors?");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

getComputerChoice();