function proofread(string) {
  const allLowerCase = string.toLowerCase();
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    let char = allLowerCase[i];
    
    if (i === 0 || allLowerCase[i - 2] === '.') {
      char = char.toUpperCase();
    } else if (allLowerCase[i] === 'i' && allLowerCase[i + 1] === 'e') {
      i += 1;
      char = 'ei';
    }
        
    result += char;
  }
  return result;
}


console.log(proofread('ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.'));