// .................Check the Year is Leap Year or Not...............

const prompt = require("prompt-sync")();
let year = prompt("Enter a year that you want to check is leap year or not: ");

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year..!`);
  } else {
    console.log(`${year} is not a leap year..!`);
  }
}
isLeapYear(year);
