// const diff = [];
// for (const item of a) {
//   if (!b.includes(item)) {
//     diff.push(item);
//   }
// }
// return diff;
function arrayDiff(a, b) {
  return a.filter(item => !b.includes(item));
}

// [3, 8, 0, 12, 15, 7, 78].filter(x => x.toString().length === 2);
// [3, 8, 0, 12, 15, 7, 78].filter(x => x > 9 && x < 100);