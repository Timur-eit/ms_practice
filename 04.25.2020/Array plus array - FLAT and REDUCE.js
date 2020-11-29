function arrayPlusArray(...arg) {
  return  arg.flat().reduce((a, b) => a + b, 0);
}

const s = [[1,2], 7, [3,[4, [[5]]]], 8, [5]];

console.log(flat(s)); // [ 1, 2, 7, 3, 4, 8, 5 ]

function flat(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flat(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

