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
    return "You win! " + playerSelection + " beats " + computerSelection + "!";
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    return "You lose! " + computerSelection + " beats " + playerSelection + "!";
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

    return computerSelection;
}



// playRound
// plays a single round of rps
// two parameters, playerSelection, computerSelection

// convert playerSelection and computer selection into lowercase (maybe do this at the input step actually)
// compare playerSelection string to the computerSelection string

// if playerselection === computerSelection
    // return string "Tie! Try again!"
// else if playerSelection === "rock"
    // if computer selection is "paper"
        // return string "You lose! Paper beats rock"
    // if computer selection is "scissors"
        // return string "You win! Rock beats paper"
// else if playerSelectino === "paper"
    // if computer selection is "rock"
        // return string "You win! Paper beats rock"
    // if computer selection is "scissors"
        // return string "You lose! Scissors beat paper"
// else if playerSelection === "scissors"
    // if computer selection is "rock"
        // return string "You lose! Rock beats scissors"
    // if computer selction is "paper"
        // return string "You win! Scissors beat paper!"

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Tie! Try again!";
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

// function game()
// play 5 rounds and then declare whether the player is the winner or the loser at the end

// for every loop until i > 5 (starting at 0)
    // playRound(getInput, computerPlay())
    // 

function game() {

    for (let i = 0; i < 5; i++) {
        console.log(playRound(getInput(), computerPlay()));
    }
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);

    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose.");
    }
    else if (playerScore === computerScore) {
        console.log("It was a tie.");
    }

}

game();
