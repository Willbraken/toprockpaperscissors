/*A Rock Paper Scissors Game!*/

let computerResponse = getRandomInt(1, 3); /* assign a number 1-3 for the computer's choice*/
let computerResult = computerPlay();
let humanInput = prompt('Rock, Paper, or Scissors?');
let humanResult = humanInput.toLowerCase();




function computerPlay() {
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
    if (computerResult == 'rock' && humanResult == 'paper') {
        return 'You Win!!!';
    } else if (computerResult == 'rock' && humanResult == 'scissors') {
        return 'You Lose! Try Again.';
    } else if (computerResult == 'paper' && humanResult == 'scissors') {
        return 'You Win!!!';
    } else if (computerResult == 'paper' && humanResult == 'rock') {
        return 'You Lose! Try Again.';
    } else if (computerResult == 'scissors' && humanResult == 'rock') {
        return 'You Win!!!';
    } else if (computerResult == 'scissors' && humanResult == 'paper') {
        return 'You Lose! Try Again.';
    } else {
        return "It's a tie!"
    }
}

console.log(game());