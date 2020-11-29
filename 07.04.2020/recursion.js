function combos(num) {
  if (num === 0) {
    return [[]];
  }
  const result = [];
  for (let i = 1; i <= num; i++) {
    result.push(...combos(num - i).map((item) => [i, ...item]));
  }
  return result;
}

console.log(combos(4));

// 1 + combos(3) → [[1, 3], [1, 1, 1, 1], [1, 1, 2]];
// 2 + combos(2) → [[2, 2], [2, 1, 1]];
// 3 + combos(1) → [[3, 1]];
// 4 + combos(0) → [[4]];

// combos(0) === [[]];
// combos(1) === [[1]];
// combos(2) === [[2], [1, 1]];
// combos(3) === [[3], [1, 1, 1], [1, 2]];

// {
//   c: 12,
//   d: 'Hello World',
//   e: 1234,
// }

const obj = {
  a: {
    b: {
      c: 12,
      d: 'Hello World'
    },
    e: 1234
  },
  x: 5,
  y: {
    w: 'qwe',
    u: true,
  }
};

const res = {
  c: 12,
  d: 'Hello World',
  e: 1234,
  x: 5,
  w: 'qwe',
  u: true,
}

function flattenMap(obj) {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] !== "object") {
      result[key] = obj[key];
    } else {
      const tmp = flattenMap(obj[key]);
      Object.assign(result, tmp);
    }
  }
  return result;
}

console.log(flattenMap(obj));


