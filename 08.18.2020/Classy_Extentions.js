class Animal {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'hello, ' + this.name;
  }
  
  speak() {
    return (this.name + ' makes a noise.');
  }
}


// class Cat extends Animal {
//   speak() {
//     return `${this.name} meows.`;
//   }  
// }


// if (!new.target) {
//   throw new Error('Это конструктор!');
// }
function Cat(...args) {
  // this.name = name;
  Animal.prototype.constructor.apply(this, args);
}

// Animal.prototype.constructor.apply(this, args);

Cat.prototype.speak = function() {
  return `${this.name} meows.`;
}

Cat.prototype.__proto__ = Animal.prototype;

// Cat.length === 1
// Cat.name === 'Cat'
// Cat.prototype === {
//   constructor: Cat,
//   __proto__: Object.prototype
// }

const barsique = new Cat('Barsique');
// https://www.youtube.com/results?search_query=%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80+%D1%81%D0%B0%D0%BC%D0%B8%D0%BB%D1%8F%D0%BA
barsique === {
  name: 'Barsique',
  __proto__: { // Cat.prototype
    speak() { 'meow' },
    __proto__: { // Animal.prototype
      hello() {
        return 'hello, ' + this.name;
      },
      speak() {
        return (this.name + ' makes a noise.');
      },
      __proto__: Object.prototype
    }
  }
}



// https://www.codewars.com/kata/classy-extentions