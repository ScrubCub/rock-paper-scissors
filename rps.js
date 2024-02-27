let playerWins = 0;
let compWins = 0;

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

function winOrLossMessage(condition, compChoice, playerChoice) {

    if (condition === "loss") {

        console.log(`You lose! ${compChoice} beats ${playerChoice}`);
        compWins++;

    } else if (condition === "win") {

        console.log(`You won! ${playerChoice} beats ${compChoice}`);
        playerWins++;

    } else {

        console.log(`It's a draw. You both chose ${playerChoice}`);

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

        winOrLossMessage('loss', compActualChoice, pChoice)

    } else if (pRand === 0 && compChoice === 2) {

        winOrLossMessage('win', compActualChoice, pChoice)


    } else if (pRand == compChoice) {

        winOrLossMessage('draw', compActualChoice, pChoice)

    } else if (pRand < compChoice) {

        winOrLossMessage('loss', compActualChoice, pChoice)

    } else if (pRand > compChoice) {

        winOrLossMessage('win', compActualChoice, pChoice)

    }
}

function winningCondition() {

    if (playerWins === 5) {
        score.textContent = "Player Wins!"
        playerWins = 0;
        compWins = 0;

    } else if (compWins === 5) {

        score.textContent = "Computer Wins!"
        playerWins = 0;
        compWins = 0;
    }


}

let body = document.querySelector('body');
let container = document.createElement('div');
let displayScore = document.createElement('div');
let score = document.createElement('p');
let rockBtn = document.createElement('button');
let paperBtn = document.createElement('button');
let scissorsBtn = document.createElement('button');

body.appendChild(displayScore);
displayScore.appendChild(score);
body.appendChild(container);
container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

score.textContent = 'Pick your choice to start the game'
rockBtn.textContent = 'Rock';
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

rockBtn.addEventListener('click', () => {

    let compChoice = getComputerChoice();
    playRound(compChoice, 'rock');
    score.textContent = `Computer: ${compWins} | Player: ${playerWins}`;
    winningCondition();


})

paperBtn.addEventListener('click', () => {

    let compChoice = getComputerChoice();
    playRound(compChoice, 'paper');
    score.textContent = `Computer: ${compWins} | Player: ${playerWins}`;
    winningCondition();
})

scissorsBtn.addEventListener('click', () => {

    let compChoice = getComputerChoice();
    playRound(compChoice, 'scissors');
    score.textContent = `Computer: ${compWins} | Player: ${playerWins}`;
    winningCondition();

})
