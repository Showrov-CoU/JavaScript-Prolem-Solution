function canPay(changeArray, totalDue) {
  if (changeArray.length === 0)
    return "You are fully Empty. You have no right to go in front of any shop....!!";

  let sum = 0;
  for (let value of changeArray) sum += value;

  if (sum >= totalDue) return true;
  else return false;
}

const a = [3, 4];
const b = 12;

console.log(canPay(a, b));
