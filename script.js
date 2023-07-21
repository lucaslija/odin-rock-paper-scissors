function getComputerChoice() {
    /** Generate a number between 1 and 3 */
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
}

getComputerChoice();