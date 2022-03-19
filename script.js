/*A Rock Paper Scissors Game!*/





function computerPlay(computerResponse) {
    computerResponse = getRandomInt(1, 3);
    if (computerResponse == 1) {
        return 'rock';
    } else if (computerResponse == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); /* returns numbers 1, 2, or 3 randomly */
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log('Game ' + (i + 1) + '/5');
     }
}

game();

function playRound(humanResult, ComputerResult) {
    let humanInput = prompt('Rock, Paper, or Scissors?');
    humanResult = humanInput.toLowerCase();
    computerResult = computerPlay();
    if ((computerResult == 'rock' && humanResult == 'paper') || (computerResult == 'paper' && humanResult == 'scissors') || (computerResult == 'scissors' && humanResult == 'rock')) {
        return 'You Win!!!';
    } else if ((computerResult == 'paper' && humanResult == 'rock') || (computerResult == 'scissors' && humanResult == 'paper') || (computerResult == 'rock' && humanResult == 'scissors')) {
        return 'You Lose! Try Again.';
    } else {
        return "It's a tie!";
    }
    }