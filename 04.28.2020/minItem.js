

findMinValueIndex([4, 7, 8, 2, 15, 33, 4, 9]) // 3

[4, 7, 8, 2, 15, 33, 4, 9]
[2, 7, 8, 4, 15, 33, 4, 9]

function findMinValueIndex(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[index]) {
      index = i;
    }
  }
  return index;
}