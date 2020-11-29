"use strict"

// function f() {
//   console.log(this);
// }

// f();

// const obj = {
//   a: 123,
//   b: {
//     qwe: f,
//   }
// };

// obj.b.qwe();

// const obj = {
//   name: x,
//   age: y,
// };
// obj.__proto__ === Object.prototype;

const f = function(x, y) {
    // this = { __proto__: f.prototype }
    this.name = x;
    this.age = y;
    // this.hello = function() {

    // }
    // return this
}

// f.prototype = {
//   constructor: f,
//   hello: function() {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// f.prototype.hello = function() {
//   console.log(`Hello, ${this.name}!`);
// };


// f.prototype === {
//   constructor: f,
//   hello: ...,
//   // __proto__: Object.prototype,
// }

const a = new f("A", 1);
const b = new f("B", 6);
const c = new f("C", 3);

// console.log(a, b, c);

a.hello();
b.hello();
