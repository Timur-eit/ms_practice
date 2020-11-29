function capitals(word) {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;

  // return Array.from(word)
  //   .map((_, i) => i)
  //   .filter(i => word[i] === word[i].toUpperCase())
}

console.log(capitals('CoDeWaRs'));
