let numbers = [1, 2, 3];

// [1,2,3].insert(0,42) => [42,1,2,3]

Object.defineProperty(Array.prototype, 'insert', {
  enumerable: true,
  value: function(index, value) {
    this.splice(index, 0, value);
    return this;
  }
});

console.log(numbers.insert(1, '123'));

// const arr1 = [1, 2, 3];
// console.log(arr1.splice(2, 0, '111'));
// console.log(arr1);
