// ..How many times is the word "Bangladesh" in the sentence below and how is the first position of "Bangladesh"..

const sentence =
  "Located in South Asia, Bangladesh is a vibrant country with a population of over 160 million. Bangladesh's economy has been growing rapidly in recent years, and the country is renowned for its delicious cuisine, stunning natural beauty, and rich cultural heritage";

let matches = sentence.match(/bangladesh/gi);
let matchNumber = matches ? matches.length : 0;
console.log(matchNumber);

let firstPosition = sentence.search(/bangladeshh/i);
firstPosition = firstPosition >= 0 ? firstPosition : "Not Found..!";
console.log(firstPosition);
