function box(number){
  const startFinishLine = '-'.repeat(number);
  const intermediateLine = `-${' '.repeat(number - 2)}-`;  
  const startArray = [startFinishLine];

  for (let i = 0; i < number - 2; i += 1) {
    startArray.push(intermediateLine);
  }

  startArray.push(startFinishLine);
  return startArray;
}

console.log(box(8));




