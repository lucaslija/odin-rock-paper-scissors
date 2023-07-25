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

/** Function to play a single round of Rock, Paper, Scissors */
function playRound(playerSelection, computerSelection) {
    let outcomeString = '';

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

    return outcomeString;
}

function game() {
    /** Instantiate score variables and win/lose string */
    let playerScore = 0;
    let computerScore = 0;
    let gameResult = '';

    /** Loop over five turns */
    for (let n = 1; n <= 5; n++) {
        /** Prompt player to choose Rock, Paper, Scissors */
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        /** Convert player input string to lowercase for standardization */
        playerSelection = playerSelection.toLowerCase();

        /** Store computer selection in a variable */
        const computerSelection = getComputerChoice();

        /** Play a round and get the resulting string */
        console.log(playRound(playerSelection, computerSelection));

        /** Determine winner/loser and adjust score accordingly */
        if (roundResultString.startsWith("You win!")) {
            playerScore++;
        } else if (roundResultString.startsWith("You lose!")) {
            computerScore++;
        }
    }

    /** Report final winner/loser */
    if (playerScore > computerScore) {
        gameResult = "Congratulations! You won the game!";
    } else if (playerScore < computerScore) {
        gameResult = "You lost! Better luck next time.";
    } else {
        gameResult = "Looks like it's a tie! Well, it's better than losing, right?";
    }

    return gameResult;
}

finalResult = game();
console.log(finalResult);