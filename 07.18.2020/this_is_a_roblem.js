function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + ' ' + this.lastName;
  // return {name: this.firstName + ' ' + this.lastName};
}

let n = new NameMe('John', 'Doe');
console.log(n);

console.log(n.firstName); //Expected: John
console.log(n.lastName); //Expected: Doe
console.log(n.name); //Expected: John Doe
