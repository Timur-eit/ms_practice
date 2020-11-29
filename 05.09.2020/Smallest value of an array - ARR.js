// const min = (arr, toReturn) => toReturn === 'index' ? arr.indexOf(Math.min(...arr)) : Math.min(...arr); 

function min(arr, toReturn) {
  let index = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[index]) {
      index = i;
    }
  }
  return toReturn === 'index' ? index : arr[index];
}