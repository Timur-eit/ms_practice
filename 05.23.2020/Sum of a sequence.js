const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

// [2 5 8 11 14 17 20] = 2 + [5 8 11 14 17 20 ]

const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  return begin + sequenceSum(begin + step, end, step);
};



// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6

console.log(sequenceSum(1,5,1)); // === 15 // 1 + 2 + 3 + 4 + 5

// sequenceSum(1,5,3) === 5 // 1 + 4


// https://www.codewars.com/kata/586f6741c66d18c22800010a