function capitalize(string){
  const evenIndexCaps = Array.from(string).map((char, index) => index % 2 === 0 ? char.toUpperCase() : char);
  const oddIndexCaps = Array.from(string).map((char, index) => index % 2 === 0 ? char: char.toUpperCase());
  return [evenIndexCaps.join(''), oddIndexCaps.join('')];
};

console.log(capitalize('abcdefg'));