function digitsAverage(input) {
  if (input < 10) {
    return input;
  }  
  const digits = String(input).split('').map(Number);
  // console.log(digits);
  let result = '';
  
  for (let i = 0; i < digits.length - 1; i += 1) {
    result += Math.ceil((digits[i] + digits[i + 1]) / 2);
    console.log(result);
  }
  return digitsAverage(+result);
}


console.log(
  digitsAverage(246)
); //  ==>  4

// original: 2   4   6
//            \ / \ /
// 1st iter:   3   5
//              \ /
// 2nd iter:     4

