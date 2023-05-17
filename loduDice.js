// .................Generate Random value of Dice....................

const prompt = require('prompt-sync')();
let minNumber = prompt("Enter minimum number of dice: ");
let maxNumber = prompt("Enter maximum number of dice: ");

function randomNumber(min,max){
    return Math.floor((Math.random()*(max-min+1)+1));
}
console.log(randomNumber(minNumber, maxNumber));