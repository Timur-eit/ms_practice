function squareDigits(num){
  // const result = [];
  // for (const digit of num.toString()) {
  //   result.push(Math.pow(digit, 2));
  // }
  return +num
    .toString()
    .split('')
    .map(x => x ** 2)
    .join('');
}

console.log(squareDigits(919));

