function solution(str){
  let result = '';
  
  for (const char of str) {
    result = char + result; 
  }
  return result;
}


console.log(solution('qwerty')); // 'ytrewq'

'ytrewq'