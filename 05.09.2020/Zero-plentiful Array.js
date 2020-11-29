// 1111111111111   0
// 11111011010101  0
// 111000001110000000111 2
// 111000001     1

// function zeroPlentiful(arr) { 
//   let totalSequences = 0;
//   let sequenceLength = 0;
//   // 0 0 0 0 0 0 1 2 0 0 3 0 0 0 0 0 0 0 5 5 7 7 0 0 0 0 1 0 0 0
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === 0) {
//       sequenceLength++;
//     } else {
//       if (sequenceLength >= 4) {
//         totalSequences++;
//         sequenceLength = 0;
//       } else if (sequenceLength > 0) {
//         return 0;
//       }
//     }
//   }
//   if (sequenceLength >= 4) {
//     totalSequences++;
//     sequenceLength = 0;
//   } else if (sequenceLength > 0) {
//     return 0;
//   }
//   return totalSequences;
// }

function zeroPlentiful(arr) {
  const zeros = arr.join('').split(/[^0]+/).filter(Boolean); // 00001110002023300002
  console.log(zeros);
  return zeros.every(seq => seq.length >= 4) ? zeros.length : 0;
}

// Passed: 97 Failed: 8

// console.log(zeroPlentiful([ 0, 0, 0, 0, 1, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0 ]));
console.log(zeroPlentiful([ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, -12, 0, 0, 0, 0 ] ));

// [ 0, 0, 0, 0, 1, 0 ]
// Expected: 0, instead got: 1 ??

// [ 0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0 ]
// Expected: 0, instead got: 2