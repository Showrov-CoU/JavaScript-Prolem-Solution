function matchFinder(string1, string2) {
  if (typeof string1 !== "string" && typeof string2 !== "string") {
    return `${string1} & ${string2} are not string....!!`;
  } else if (typeof string1 !== "string") {
    return `${string1} is not a string. It is ${typeof string1}....!!`;
  } else if (typeof string2 !== "string") {
    return `${string2} is not a string. It is ${typeof string2}....!!`;
  } else {
    if (string1.indexOf(string2) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(matchFinder("John Doe", "ohn"));
