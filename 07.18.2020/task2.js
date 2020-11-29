function isPalindrome(value) {
  const arr = value.toLowerCase().split('').filter((item) => item !== ' ');
  const str1 = [...arr].reverse().join('');
  const str2 = arr.join('');
  
  return str1 === str2;
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama'));// true
