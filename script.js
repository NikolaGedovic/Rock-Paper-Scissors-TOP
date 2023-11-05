let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Get Computer Choice Function
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            scoreDiv.textContent += ' - You Win!';
        } else if (playerScore < computerScore) {
            scoreDiv.textContent += ' - You Lose!';
        } else {
            scoreDiv.textContent += ' - It\'s a tie!';
        }

        disableButtons();
        document.getElementById('playAgain').style.display = 'block';
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function enableButtons() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

function playRound(playerSelection) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = '';

    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = "It's a tie!";
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    roundCount++;
    updateScore();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    updateScore();
    enableButtons();
    document.getElementById('results').textContent = '';
    document.getElementById('playAgain').style.display = 'none';
}

document.getElementById('rock').addEventListener('click', function () {
    playRound('Rock');
});

document.getElementById('paper').addEventListener('click', function () {
    playRound('Paper');
});

document.getElementById('scissors').addEventListener('click', function () {
    playRound('Scissors');
});

document.getElementById('playAgain').addEventListener('click', function () {
    resetGame();
});