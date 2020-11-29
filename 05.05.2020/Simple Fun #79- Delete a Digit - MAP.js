// function deleteDigit(n) {
//   const arrNum = String(n).split('');
//   console.log(arrNum);
//   const result = [];
  
//   for (let i = 0; i < arrNum.length; i += 1) {
//     result.push(arrNum.slice(0, i).reduce((a, b) => a + b, '') + arrNum.slice(i + 1).reduce((a, b) => a + b, ''));
//     console.log(result);
//   }
    
//   return Math.max(...result.map((x) => +x));
// }


console.log(deleteDigit(152));


function deleteDigit(n) {
  const str = String(n);
  const result = str
    .split('')
    .map((_, i) => str.slice(0, i) + str.slice(i + 1))
    .map(Number);
  console.log(result);
    
  return Math.max(...result);
}


console.log(deleteDigit(152));