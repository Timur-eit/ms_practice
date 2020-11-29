const isOdd = (num) => num % 2 !== 0;

function insertDash(num) {
  const collOfNum = num.toString();
  let result = collOfNum[0];
  
  for (let i = 1; i < collOfNum.length; i += 1) {
    if (isOdd(+collOfNum[i]) && isOdd(+result[result.length - 1])) {
      result += '-';
    }
    result += collOfNum[i];
  }
  
  return result;
};

console.log(insertDash('235679854332'));