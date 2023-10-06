const options = ["rock", "paper", "scissors"];

// Play a Round Function

function game() {
    playRound();
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
    if (check == true) {
        console.log(input);
    }
    return input;
}

function playRound() {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();
}

// Validate Input Function
function validateInput(choice) {
    if (options.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

game();