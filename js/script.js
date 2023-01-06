const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let message = ''

    if (playerSelection === computerSelection){
        message = 'Draw!';
    }else if (
        playerSelection == 'paper' & computerSelection == 'rock' ||
        playerSelection == 'scissors' & computerSelection == 'paper' ||
        playerSelection == 'rock' & computerSelection == 'scissors'
    ){
        message = `You Won! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    }else{
        message = `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    }
    console.log(message);
    return message;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    scoreBoard = {
        player: playerScore,
        computer: computerScore
    };

    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        let playerSelection;
        while (!choices.includes(playerSelection)){
            playerSelection = prompt('Choose between Rock, Paper and Scissors! ');
        };

        const result = playRound(playerSelection, computerSelection);
        if (result.includes('Won')){
            scoreBoard.player++;
        }else if(result.includes('Lose')){
            scoreBoard.computer++;
        }
        console.log(`Current standings - Player: ${scoreBoard.player}, Computer: ${scoreBoard.computer}`);
    }
    if (scoreBoard.player > scoreBoard.computer){
        console.log('** You Won! Game Over **');
    }else if (scoreBoard.player > scoreBoard.computer){
        console.log('** You Lose! Game Over **');
    }else{
        console.log('** Draw! Game Over **')
    }
}

game();