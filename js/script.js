const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    let result = ''

    if (player === computer){
        result = 'Tie game!';
    } else if (
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'rock' && computer === 'scissors')
    ){
        result = `You Won! ${capitalizeFirstLetter(player)} beats ${capitalizeFirstLetter(computer)}`;
    } else {
        result = `You Lose! ${capitalizeFirstLetter(computer)} beats ${capitalizeFirstLetter(player)}`;
    }
    console.log(result);
    return result;
}

function initializeScoreBoard(){
    return {
        player: 0,
        computer: 0
    }
}

function getPlayerChoice() {
    let playerSelection;
    while (!choices.includes(playerSelection)){
        playerSelection = prompt('Choose between Rock, Paper and Scissors!');
    }
    return playerSelection;
}

function updateScoreboard(scoreBoard, result) {
    if (result.includes('Won')){
        scoreBoard.player++;
    } else if (result.includes('Lose')){
        scoreBoard.computer++;
    }
}

function displayGameResult(scoreboard) {
    if (scoreboard.player > scoreboard.computer){
        console.log('** You Won! Game Over **');
    } else if (scoreboard.player > scoreboard.computer){
        console.log('** You Lose! Game Over **');
    } else {
        console.log('** Draw! Game Over **')
    }
}

function displayStandings(scoreboard) {
    console.log(`Current standings - Player: ${scoreboard.player}, Computer: ${scoreboard.computer}`);
}

function game(){
    let scoreBoard = initializeScoreBoard();
    for (let i = 0; i < 3; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        const result = playRound(playerSelection, computerSelection);
        updateScoreboard(scoreBoard, result);
        displayStandings(scoreBoard);
    }
    displayGameResult(scoreBoard);
}

game();