// helper functions
// get random integer between values

let playerScore = 0;
let computerScore = 0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function win
// takes parameters playerSelection and computerSelection
// returns a string "You win! " + playerSelection + " beats " + computerSelection + "!"

function win(playerSelection, computerSelection) {
    playerScore++;
    displayScore();
    gameStatus.textContent = "Nice! " + playerSelection + " beats " + computerSelection + "!";
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    displayScore()
    gameStatus.textContent = "Damn. " + computerSelection + " beats " + playerSelection + "!";
}

function tie() {
    gameStatus.textContent = "Tie! Try again."
}

function displayScore() {

    if (playerScore >= 5) {
        scoreBoard.textContent = "You win!";
    } else if (computerScore >= 5) {
        scoreBoard.textContent = "You lose! Try again."
    } else {
    scoreBoard.textContent = ("Player: " + playerScore + '\n' +
    "Computer: " + computerScore);
    }
}

// function getInput
// prompt player "Rock, paper, or scissors"
// convert to lowercase, trim any whitespace just incase
// if it matches rock, paper, or scissors, return the value
    // otherwise, prompt again "Invalid input. Please choose rock, paper, or scissors."

function getInput() {
    playerInput = prompt("Rock, paper, or scissors");
    playerInput = playerInput.trim();
    playerInput = playerInput.toLowerCase();

    if (playerInput === "rock" | playerInput === "paper" | playerInput === "scissors") {
        return playerInput;
    }
    else {
        console.log("invalid entry, retrying")
        playerInput = getInput();
        return playerInput;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        playRound(button.id, computerPlay());

    });
});

const scoreBoard = document.querySelector('.results');
scoreBoard.textContent = "Player: \n Computer: "

const gameStatus = document.querySelector('.status');

// computerPlay
// randomly chooses between 3 options; rock, paper, or scissors

// create variable rock, set it equal to 1
// create variable paper, set it equal to 2
// create variable scissors, set it equal to 3
// use getRandomIntInclusive to randomly generate a number between 1 and 3
// return the value, store it in a variable computerSelection

function computerPlay() {

    computerSelectionNumber = getRandomIntInclusive(1,3);

    if (computerSelectionNumber === 1){
        computerSelection = "rock";
    }
    else if (computerSelectionNumber === 2) {
        computerSelection = "paper";
    }
    else if (computerSelectionNumber === 3) {
        computerSelection = "scissors";
    }
    console.log("Computer chose " + computerSelection);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return tie();
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return lose(playerSelection, computerSelection);
        }
        else if (computerSelection === "scissors") {
            return win(playerSelection, computerSelection);
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return win(playerSelection, computerSelection);
        }
        else if (computerSelection === "scissors") {
            return lose(playerSelection, computerSelection);
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return lose(playerSelection, computerSelection);
        }
        else if (computerSelection === "paper") {
            return win(playerSelection, computerSelection);
        }
    }
}

