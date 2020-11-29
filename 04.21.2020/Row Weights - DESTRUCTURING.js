function rowWeights(array){
  const result = [0, 0];
  for (let i = 0; i < array.length; i += 1) {
    // if (i % 2 === 0) {
    //   result[0] += array[i];
    // } else {
    //   result[1] += array[i];
    // }
    result[i % 2] += array[i];
  }
  return result;
}

console.log(rowWeights([50,60,70,80]));


// Test.assertSimilar(rowWeights([50,60,70,80]), [120,140]);
