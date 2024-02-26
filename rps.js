function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);

    return random;
}

function getActualChoice(num) {

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else if (num === 2) {
        return "scissors";
    }
}


function playRound(compChoice, playerChoice) {

    let compActualChoice = getActualChoice(compChoice);
    let pChoice = playerChoice.toLowerCase();
    let pRand;

    if (pChoice === "rock") {
        pRand = 0;
    } else if (pChoice === "paper") {
        pRand = 1;
    } else if (pChoice === "scissors") {
        pRand = 2;
    }

    if (pRand === 2 && compChoice === 0) {

        let message = `You lose! ${compActualChoice} beats ${pChoice}`;
        console.log(message);
        return -1;

    } else if (pRand === 0 && compChoice === 2) {

        let message = `You won! ${pChoice} beats ${compActualChoice}`;
        console.log(message);
        return 1;

    } else if (pRand == compChoice) {

        let message = `It's a draw. You both chose ${pChoice}`;
        console.log(message);
        return 0;

    } else if (pRand < compChoice) {

        let message = `You lose! ${compActualChoice} beats ${pChoice}`;
        console.log(message);
        return -1;

    } else if (pRand > compChoice) {

        let message = `You won! ${pChoice} beats ${compActualChoice}`;
        console.log(message);
        return 1;

    }
}

function playGame() {

    let playerWins = 0;
    let compWins = 0;

    for (let i = 0; i < 5; i++) {

        let playerChoice = prompt("Enter your choice: ");
        let compChoice = getComputerChoice();
        let whoWon = playRound(compChoice, playerChoice);

        if (whoWon === 1) {
            playerWins++;
        } else if (whoWon === 0) {
            playerWins++;
            compWins++;
        } else if (whoWon === -1) {
            compWins++;
        }
    }

    if (playerWins > compWins) {
        console.log("Player wins!");
    } else if (compWins > playerWins) {
        console.log("Computer wins!");
    } else {
        console.log("It's a draw!");
    }
}

playGame()
