// ....................Find Unique Numbers in Array........................

const prompt = require("prompt-sync")();
let range = prompt("How many numbers would you like to put in array: ");
const array = [];

for (let i = 0; i < range; i++) {
    array.push(prompt("Enter a number: "));
}

const newArray = array.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});

console.log(array);
console.log(newArray);
