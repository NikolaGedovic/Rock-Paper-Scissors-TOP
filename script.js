const options = ["rock", "paper", "scissors"];
const winners = [];

// Play a Round Function

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

// Computers Choice Function
function getComputerChoice() {
    let choices = options[Math.floor(Math.random() * options.length)];
    return choices;
}

// console.log(getComputerChoice());

// User Choice Function
function getUserChoice() {
    let input = prompt("Type Rock, Paper or Scissors.");
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors.")
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    if (check == false) {
        input = prompt("Type Rock, Paper or Scissors. Spelling needs to be exact.");
        while (input == null) {
            input = prompt("Type Rock, Paper or Scissors.")
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function playRound(round) {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

// Validate Input Function
function validateInput(choice) {
    if (options.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

// Check Winner
function checkWinner(choicePlayer, choiceComputer) {
    if (choicePlayer === choiceComputer) {
        return "No one";
    } else if (
        (choicePlayer === "rock" && choiceComputer === "scissors") ||
        (choicePlayer === "paper" && choiceComputer === "rock") ||
        (choicePlayer === "scissors" && choiceComputer === "paper")) {
        return "Player"
    } else {
        return "Computer"
    }
}

// Track Results
function logWins() {
    console.log(winners);
}

function logRound(choicePlayer, choiceComputer, winner, round) {
    console.log("Round ", round);
    console.log("Player Chose: ", choicePlayer);
    console.log("Computer Chose: ", choiceComputer);
    console.log(winner, " Won the round!");
}

game();