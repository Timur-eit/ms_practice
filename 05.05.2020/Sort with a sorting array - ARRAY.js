function sort(initialArray, sortingArray) {
  // const subResult = [];
  // for (let i = 0; i < sortingArray.length; i += 1) {
  //   subResult.push(sortingArray.indexOf(i));
  // }
  // return subResult.map((index) => initialArray[index]);

  const result = [];
  for (let i = 0; i < initialArray.length; i += 1) {
    result[sortingArray[i]] = initialArray[i];
    console.log(result);
  }
  return result;

}


console.log(sort(['z', 'x', 'y'], [0, 2, 1])) // => ['z', 'y', 'x']





