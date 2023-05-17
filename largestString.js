//.....Find the largest string in array.....
const prompt = require("prompt-sync")();
const range = prompt("The length of arrayOfString: ");
const arrayOfString = [];

for (let i = 0; i < range; i++) {
  arrayOfString.push(prompt(`Enter the ${i + 1}th string of array: `));
}

function largestString(names) {
  let currentLargest = "";
  for (str of names) {
    if (str.length > currentLargest.length) {
      currentLargest = str;
    }
  }
  return [currentLargest, names.indexOf(currentLargest)];
}
console.log(largestString(arrayOfString)[0]);
console.log(largestString(arrayOfString)[1]);
