function cubeNumber(number) {
  if (typeof number !== "number") {
    return `${number} is not a Number. It is ${typeof number}....!!`;
  } else {
    let result = number * number * number;
    return result;
  }
}

console.log(cubeNumber(3));
