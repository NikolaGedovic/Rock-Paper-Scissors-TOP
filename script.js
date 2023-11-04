let playerScore = 0;
let computerScore = 0;

function updateResults(playerSelection, computerSelection, roundResult) {
    const resultsDiv = document.getElementById('results');
    const resultText = document.createElement('p');
    resultText.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}. Result: ${roundResult}`;
    resultsDiv.appendChild(resultText);
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore >= 5) {
        scoreDiv.textContent += ' - You Win!';
        disableButtons();
    } else if (computerScore >= 5) {
        scoreDiv.textContent += ' - You Lose!';
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    updateResults(playerSelection, computerSelection, roundResult);
    updateScore();
}

document.getElementById('rock').addEventListener('click', function () {
    game('Rock');
});

document.getElementById('paper').addEventListener('click', function () {
    game('Paper');
});

document.getElementById('scissors').addEventListener('click', function () {
    game('Scissors');
});
