function cake(x, y){
  const A_LETTER_ASCII_POSITION = y.charCodeAt('a');
  let yTotal = 0;

  for (let i = 0; i < y.length; i += 1) {
    if (i % 2 !== 0) {
      yTotal += y.charCodeAt(i) - A_LETTER_ASCII_POSITION + 1;
    } else {
      yTotal += y.charCodeAt(i)
    }
  }

  return yTotal > 0.7 * x ? 'Fire!' : 'That was close!';
}

console.log(cake(480, 'jxrqbl'));