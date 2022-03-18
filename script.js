/*A Rock Paper Scissors Game!*/

let computerResponse = getRandomInt(1, 3); /* assign a number 1-3 for the computer's choice*/
let computerResult = computerPlay();

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