const charLib = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

function DNAStrand(string) {
  return string.replace(/./g, (match) => charLib[match]);
  // return string
  //   .split('')
  //   .map((char) => charLib[char])
  //   .join('');
}

console.log(DNAStrand ("ATTGC")); // return "TAACG"
console.log(DNAStrand ("GTAT") );// return "CATA" 



// https://www.codewars.com/kata/554e4a2f232cdd87d9000038