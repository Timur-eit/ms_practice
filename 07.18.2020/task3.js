// function uniq(values) {
//   let result = [];
//   for (const number of values) {
//     if (!result.includes(number)) {
//       result.push(number);
//     }
//   }
//   return result;
// }

function uniq(values) {
  let objOfNumbers = {};
  let result = [];
  for (const number of values) {
    if (!(number in objOfNumbers)) {
      objOfNumbers[number] = number;
      result.push(number);
    }
  }
  return result;
}


// function uniq(values) {
//   return Array.from(new Set(values));
// }

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));