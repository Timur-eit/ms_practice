const isEmptyOrNull = a => a === null || a.length === 0;

function getLengthOfMissingArray(arr) {  
  if (isEmptyOrNull(arr) || arr.some(isEmptyOrNull)) {
    return 0;
  }
  const lengths = arr.map((item) => item.length);

  const sum = lengths.reduce((a, b) => a + b, 0);
  
  const a = Math.min(...lengths);
  const b = Math.max(...lengths);

  const count = (a + b) * (b - a + 1) / 2;

  return count - sum;

  // 1+2+3+...+98+99+100 = ?
  // (1 + 100) × 100 / 2
  
  // 1..44 44..192

  // 45 46 47 48 ... 189 190 191 192
  // a                            b
  // (a + b) * (b - a + 1) / 2

    // .sort((a, b) => a < b ? -1 : 1);
    
  // 1 2 4 5
  // for (let i = 0; i < lengths.length - 1; i += 1) {
  //   if (lengths[i] + 1 !== lengths[i + 1]) {
  //     return lengths[i] + 1;
  //   }
  // }  
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) //, 3);
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )) //, 2);
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] )) // , 2);
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] )) //, 5);
    



