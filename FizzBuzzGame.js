//....................FIZZBUZZ Game........,..............

const prompt = require("prompt-sync")();
const value = prompt("Highest Value: ");

function fizzBuzz(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} is FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is Buzz`);
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(value);
