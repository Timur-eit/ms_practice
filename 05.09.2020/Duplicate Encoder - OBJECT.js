import assert from 'assert';

function duplicateEncode(word){
  const formaredWord = word
    .toLowerCase()
    .split('')  
    
  const charCount = {};
  for (const char of formaredWord) {
    if (char in charCount) {
      charCount[char] += 1;
    } else { 
      charCount[char] = 1;
    }
  }

  return formaredWord.map(ch => charCount[ch] > 1 ? ')' : '(').join('');
}

// console.log(duplicateEncode('recede'));
assert.deepEqual(duplicateEncode("din"),"(((");
assert.deepEqual(duplicateEncode("recede"),"()()()");
assert.deepEqual(duplicateEncode("Success"),")())())");
assert.deepEqual(duplicateEncode("(( @"),"))((");



function duplicateEncode_EDIT(str) {
  return str
    .toLowerCase()
    .split('')
    .map((char, _, array) => array.indexOf(char) === array.lastIndexOf(char) ? '(' : ')')
    .join('');
}

// console.log(duplicateEncode_EDIT("recede"));
assert.deepEqual(duplicateEncode_EDIT("din"),"(((");
assert.deepEqual(duplicateEncode_EDIT("recede"),"()()()");
assert.deepEqual(duplicateEncode_EDIT("Success"),")())())");
assert.deepEqual(duplicateEncode_EDIT("(( @"),"))((");

