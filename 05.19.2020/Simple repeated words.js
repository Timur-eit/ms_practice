// function solve(a, b, d = 0) {
//   console.log('  '.repeat(d), a, b, a === '' ? "+" : '');
//   if (a === '') return 1;
//   let counter = 0;
//   for (let i = 0; i < b.length; i += 1) {
//     if (a[0] === b[i]) {
//       counter += solve(a.slice(1), b.slice(i+1), d + 1);
//     }
//   }
//   return counter;
// }

function solve(a, b) {
  if (a === '') return 1; // ?
  let counter = 0;
  for (let i = 0; i < b.length; i += 1) {
    if (a[0] === b[i]) {
      counter += solve(a.slice(1), b.slice(i + 1));
    }
  }
  return counter;
}

'b'  'abcvbc' → 2
'' 'cvbc' → 1
'' 'c' → 1


// console.log(solve('zaz', 'zazapulz'));
console.log(solve('zaz', 'zazapulz'));
