// ............Count the Number of Vowel of any Sentence...............

const prompt = require("prompt-sync")();
let sentence=prompt("Please Enter a sentence: ");

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}
console.log(countVowels(sentence));
