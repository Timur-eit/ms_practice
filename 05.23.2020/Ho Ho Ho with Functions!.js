function ho(str) {
  if (str === undefined) return 'Ho!'
  return `Ho ${str}`;
}

console.log( ho( ho( ho() ) ) );



// https://www.codewars.com/kata/52af1f150fcae8d33d0009bc