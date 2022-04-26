/*A Rock Paper Scissors Game!*/

let compWin = 0;
let humanWin = 0;
let numGames = 0;

const choice = document.querySelectorAll('button');
const container = document.querySelector('#container');

const gameResult = document.createElement('p');
gameResult.classList.add('gameResult');

const gameText = document.createElement('p');
gameText.classList.add('gameText');

const overallWin = document.createElement('p');
overallWin.classList.add('overallWin');

choice.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
        ++numGames;
        game();
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
function game() {
    if(humanWin > compWin && numGames === 5) {
        overallWin.textContent = 'You Win Overall!';
        container.appendChild(overallWin);
    } else if(compWin > humanWin && numGames === 5) {
        overallWin.textContent = 'You Lose Overall';
        container.appendChild(overallWin);
    } else if(compWin === humanWin && numGames ===5) {
        overallWin.textContent = 'Overall Tie';
        container.appendChild(overallWin);
    } else;
    gameText.textContent = 'Game ' + numGames + "/5";
    container.appendChild(gameText);
}

function playRound(humanResult, computerResult) {
    computerResult = computerPlay();
    if ((computerResult == 'rock' && humanResult == 'paper') || (computerResult == 'paper' && humanResult == 'scissors') || (computerResult == 'scissors' && humanResult == 'rock')) {
        gameResult.textContent = 'You Win!!!';
        container.appendChild(gameResult);
        return ++humanWin;
    } else if ((computerResult == 'paper' && humanResult == 'rock') || (computerResult == 'scissors' && humanResult == 'paper') || (computerResult == 'rock' && humanResult == 'scissors')) {
        gameResult.textContent = 'You Lose! Try Again.';
        container.appendChild(gameResult);
        return ++compWin;
    } else {
        gameResult.textContent = "It's a tie!";
        container.appendChild(gameResult);
    }
    }