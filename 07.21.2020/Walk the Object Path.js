function find(src, path) {
  const pathArr = path.split('.');
  let current = src;

  for (const key of pathArr) {
    if (current.hasOwnProperty(key)) {
      current = current[key];
      console.log(current);
    } else {
      return;
    }
  }
  return current;
}

var fixture = {
  user: {
    addresses: [ [Object], [Object] ],
    name: {
      first: 'John',
      last: 'Snow'
    }
  }
};    

// console.log('qwe'.hasOwnProperty('toString'));
// console.log(String.prototype.hasOwnProperty('toString'));
// console.log(Object.prototype.hasOwnProperty('toString'));


console.log(find(fixture, 'user.name.first.toString'));



// https://www.codewars.com/kata/59418db3f5c394eca80000ef/solutions/javascript