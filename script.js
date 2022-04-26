/*A Rock Paper Scissors Game!*/

let compWin = 0;
let humanWin = 0;

const choice = document.querySelectorAll('button');

choice.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
}); 

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

/*
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log('Game ' + (i + 1) + '/5');
     }
    if (humanWin > compWin) {
        console.log('You win overall!');
    } else if (compWin > humanWin) {
        console.log('You lose overall!');
    } else {
        console.log('Overall tie.');
    }
}

game();
*/



function playRound(humanResult, ComputerResult) {
    //let humanInput = prompt('Rock, Paper, or Scissors?');
    //humanResult = humanInput.toLowerCase();
    computerResult = computerPlay();
    if ((computerResult == 'rock' && humanResult == 'paper') || (computerResult == 'paper' && humanResult == 'scissors') || (computerResult == 'scissors' && humanResult == 'rock')) {
        console.log('You Win!!!');
        return ++humanWin;
    } else if ((computerResult == 'paper' && humanResult == 'rock') || (computerResult == 'scissors' && humanResult == 'paper') || (computerResult == 'rock' && humanResult == 'scissors')) {
        console.log('You Lose! Try Again.');
        return ++compWin;
    } else {
        console.log("It's a tie!");
    }
    }