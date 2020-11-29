function takeWhile (arr, pred) {
  console.log(arr);
  console.log(pred);
    
  const result = [];
  
  if (pred(arr[0])) {
    let i = 0;
    while (pred(arr[i])) {
      result.push(arr[i]);
      i++;
      }
    }
    return result;
  }

// STDERR
// Execution Timed Out (12000 ms)


function takeWhile (arr, pred) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (pred(arr[i])) {
      result.push(arr[i]);
    } else {
      break;
    }
  }
  return result;
}


// https://www.codewars.com/kata/54f9173aa58bce9031001548