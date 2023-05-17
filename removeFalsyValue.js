//..................Remove Falsy value from Array......................
//........Falsy values are undefined, NaN, false, null, "", 0 .........

const mixedArray = [
  "Ashikur Rahman",
  0,
  19,
  undefined,
  3.28,
  NaN,
  "S",
  false,
  true,
  "",
  "08",
  null,
  "Showrov",
];

// const trueArray = mixedArray.filter((value) => {
//   if (value) {
//     return true;
//   } else return false;
// });

const trueArray = mixedArray.filter(Boolean);

console.log(trueArray);
