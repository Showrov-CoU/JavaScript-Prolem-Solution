function cubeNumber(number) {
  if (typeof number !== "number") {
    return `${number} is not a Number. It is ${typeof number}....!!`;
  } else {
    let result = number * number * number;
    return result;
  }
}

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

function sortMaker(arr) {
  if (arr[0] === arr[1]) {
    return "equal";
  } else if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else {
    if (arr[0] < arr[1]) {
      arr[1] = arr[0] + arr[1];
      arr[0] = arr[1] - arr[0];
      arr[1] = arr[1] - arr[0];
    }
    return arr;
  }
}

function findAddress(obj) {
  const arr = [10, "15A", "Earth Perfect"];
  const arr2 = ["__", "__", "__"];
  for (let property in obj) {
    let index = arr.indexOf(obj[property]);
    arr2[index] = obj[property];
  }
  return `${arr2[0]},${arr2[1]},${arr2[2]}`;
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0)
    return "You are fully Empty. You have no right to go in front of any shop....!!";

  let sum = 0;
  for (let value of changeArray) sum += value;

  if (sum >= totalDue) return true;
  else return false;
}
