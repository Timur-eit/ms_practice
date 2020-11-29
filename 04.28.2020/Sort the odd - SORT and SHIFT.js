function sortNumbers(arr) {
  // need explanations about how it works
  return arr.sort((a, b) => {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  });
}

function sortArray(arr) {
  const oddNumbers = arr.filter(x => x % 2 !== 0).sort((a, b) => a - b);
  return arr.map(item => item % 2 !== 0 ? oddNumbers.shift() : item);
}

// const arr = [7, 100, 100, 5, 17, 9, 3, 100, 100, 1];
// console.log(sortArray(arr));

// 8 15 87 30 8 12



const arr = [8, 15, 87, 30, 8, 12];
// console.log(left, right);
// if (left < right) return -1;
// return 1;

console.log(arr.sort((a, b) => a - b));
