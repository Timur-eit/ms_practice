function dataReverse(arrayOfArrays) {
  const result = [];
  for (let i = arrayOfArrays.length; i > 0; i -= 8) {
    result.push(...arrayOfArrays.slice(i - 8, i));
  }
  return result;
}




const arrayOfArrays = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];