const prompt = require("prompt-sync")();
const range = prompt("The length of array: ");
const array = [];

for (let i = 0; i < range; i++) {
  array.push(prompt("Enter the element of array: "));
}
const value = prompt("Press the Search value: ");

function linearSearch(arr, value) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === value) {
      return i + 1;
    }
  }
  return "Not Found...!";
}
console.log(linearSearch(array, value));
