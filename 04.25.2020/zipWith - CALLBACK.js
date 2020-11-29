function zipWith(fn,a0,a1) {
  const result = [];
  for (let i = 0; i < Math.min(a0.length, a1.length); i += 1) {
    result.push(fn(a0[i], a1[i])); 
  }
  return result;
}


const plus = (a, b) => a + b;
console.log(zipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1]));

