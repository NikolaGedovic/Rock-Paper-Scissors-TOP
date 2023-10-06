// Computers Choice Function
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

// console.log(getComputerChoice());

// User Choice Function
function getUserChoice() {
    let userSelection = prompt("Type Rock, Paper or Scissors.");
    let option = userSelection.toLowerCase();
    return option;
}

