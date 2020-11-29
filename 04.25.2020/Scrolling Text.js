function scrollingText(str) {
  let result = [str.toUpperCase()];
  for (let i = 0; i < str.length - 1; i +=1) {
    result.push(result[i].slice(1) + result[i][0]);
  }
  return result;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// "qwerty".slice(4, 1) // ""
// "qwerty".substring(4, 1) // "wer"

console.log(scrollingText('abc'));

// Test.assertDeepEquals(scrollingText("abc"), ["ABC","BCA","CAB"])