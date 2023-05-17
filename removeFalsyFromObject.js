//..................Remove Falsy value from Array......................
//........Falsy values are undefined, NaN, false, null, "", 0 .........

const mixedObject = {
  a: "Ashikur Rahman",
  b: 0,
  c: 19,
  d: undefined,
  e: 3.28,
  f: NaN,
  g: "S",
  h: false,
  i: true,
  j: "",
  k: "08",
  l: null,
  m: "Showrov",
};

const truthyObject = function (obj) {
  for (prprty in obj) {
    if (!obj[prprty]) {
      delete obj[prprty];
    }
  }
  return obj;
};
console.log(truthyObject(mixedObject));
