let scoreBoard = initializeScoreBoard();

let allButtons = document.querySelectorAll('button');
let currentResultField = document.querySelector(".current-result");
let finalResultField = document.querySelector('.final-result');
let scoreBoardField = document.querySelector('.scoreboard');
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

allButtons.forEach(item => {
    item.addEventListener('click', playRound)
});


function initializeScoreBoard() {
    return {
        player: 0,
        computer: 0
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function playRound() {

    const player = this.value;
    const computer = getComputerChoice();
    let result = '';

    if (player === computer) {
        result = 'Tie game this round!';
    } else if (
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'rock' && computer === 'scissors')
    ) {
        result = `You won this round! ${capitalizeFirstLetter(player)} beats ${capitalizeFirstLetter(computer)}`;
    } else {
        result = `You lose this round! ${capitalizeFirstLetter(computer)} beats ${capitalizeFirstLetter(player)}`;
    }

    currentResultField.innerHTML = result;
    updateScoreboard(scoreBoard, result);
    displayStandings(scoreBoard);

    if (scoreBoard.player === 5 || scoreBoard.computer === 5) {
        displayGameResult(scoreBoard);
        addRestartButton();
        return
    }
}


function updateScoreboard(scoreBoard, result) {
    if (result.includes('won')) {
        scoreBoard.player++;
    } else if (result.includes('lose')) {
        scoreBoard.computer++;
    }
}


function displayGameResult(scoreboard) {
    if (scoreboard.player > scoreboard.computer) {
        finalResultField.innerHTML = '** You Won! Game Over **';
    } else {
        finalResultField.innerHTML = '** You Lose! Game Over **';
    }
    disableGameButtons();
}

function disableGameButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function addRestartButton() {

    let restartButton = document.createElement('button');
    restartButton.setAttribute("id", "restartButton");
    restartButton.innerHTML = 'Restart game';
    finalResultField.append(restartButton);
    restartButton.addEventListener('click', () => { window.location.reload() });
}


function displayStandings(scoreboard) {
    scoreBoardField.innerHTML = `Current standings - Player: ${scoreboard.player}, Computer: ${scoreboard.computer}`;
}