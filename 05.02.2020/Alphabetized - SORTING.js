function alphabetized(str) {
  return str
    .split('')
    .filter((item) => item.toLowerCase() >= 'a' && item.toLowerCase() <= 'z')
    .map((letter, index) => ({ letter, index }))
    .sort((a, b) => {
      if (a.letter.toLowerCase() === b.letter.toLowerCase()) {
        return a.index - b.index;
      }
      return a.letter.toLowerCase() < b.letter.toLowerCase() ? -1 : 1;
    })
    .map((item) => item.letter)
    .join('');
}

// "The" =>
// ["T", "h", "e"] =>
// [{ letter: "T", index: 0 }, {  letter: "h", index: 1 }, {  letter: "e", index: 2 }]

console.log((alphabetized('The Holy Bible! _()@#$12334'))); //  === 'BbeehHilloTy'

const persons = [
  {name: "нпнеа", age: 23},
  {name: "нпеак", age: 55},
  {name: "12345ы", age: 55},
  {name: "пен", age: 12},
  {name: "нпегае", age: 76},
  {name: "пён", age: 55},
  {name: "паш", age: 765},
  {name: "пяп", age: 4},
  {name: "01234", age: 89},
];

// persons.sort((a, b) => a.name.localeCompare(b.name));

// console.log(persons);

