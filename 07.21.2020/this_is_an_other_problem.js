function NamedOne(first, last) {
  // this = { __proto__: NamedOne.prototype }
  this.firstName = first;
  this.lastName = last;

  // return {
  //   __proto__: Object.prototype,
  //   firstName: first,
  //   lastName: last,
  //   get fullName() {
  //     return `${this.firstName} ${this.lastName}`
  //   },
  //   set fullName(value) {
  //     const arr = value.split(' ');
  //     if (arr.length >= 2) {
  //       [this.firstName, this.lastName] = arr;
  //     }
  //   },
  // }
}

Object.defineProperty(NamedOne.prototype, 'fullName', {
  enumerable: true,
  get() {
    return `${this.firstName} ${this.lastName}`
  },
  set(value) {
    const arr = value.split(' ');
    if (arr.length >= 2) {
      [this.firstName, this.lastName] = arr;
    }
  },
});
Object.defineProperty(NamedOne.prototype, 'fullName2', {
  // enumerable: true,
  value: 'qwe',

});

NamedOne.prototype.fullName3 = 'qqq';

let n = new NamedOne('John', 'Doe');

// console.log(n.fullName2);
console.log(n.fullName);
// console.log(Object.getOwnPropertyDescriptor(n, 'fullName'));

n.fullName = 'Miky';
// console.log(n.fullName);

for (const key in n) {
  // console.log(key);
}

let descriptors = Object.getOwnPropertyDescriptor(NamedOne.prototype, 'fullName3');

// console.log(descriptors);
