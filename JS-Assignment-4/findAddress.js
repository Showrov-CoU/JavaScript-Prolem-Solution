function findAddress(obj) {
  const arr = [10, "15A", "Earth Perfect"];
  const arr2 = ["__", "__", "__"];

  for (let property in obj) {
    let index = arr.indexOf(obj[property]);
    arr2[index] = obj[property];
  }

  return `${arr2[0]},${arr2[1]},${arr2[2]}`;
}

const obj = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};

console.log(findAddress(obj));
