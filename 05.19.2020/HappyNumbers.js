function isHappyNumber(x, prevNumbers = []) {
  if (x === 1) {
    return true;
  }
  if (prevNumbers.includes(x)) {
    return false;
  }
  prevNumbers.push(x);
  const digits = String(x);
  let result = 0;
  for (let i = 0; i < digits.length; i += 1) {
    result += (+digits[i]) ** 2;
  }
  return isHappyNumber(result, prevNumbers);
}


function happyNumbers(n) {
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    if (isHappyNumber(i)) {
    result.push(i);
    }
  }
  return result;
}

console.log(
  happyNumbers(50),
);

