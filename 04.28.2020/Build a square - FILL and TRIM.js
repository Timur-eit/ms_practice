function generateShape(int) {
  return Array(int).fill(`${'+'.repeat(int)}`).join('\n');
}

// const a = Array(5);
// a.length === 5
// const a = [undefined,undefined,undefined,undefined,undefined]
// console.log(a.map(x => 123));


// const generateShape2 = (int) => ('+'.repeat(int)+'\n').repeat(int).trim();

console.log(generateShape(8));