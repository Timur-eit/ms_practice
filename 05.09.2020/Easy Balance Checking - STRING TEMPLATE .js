
// NaN 0 '' null undefined false 0n
// Boolean(value)


function balance(book) {
  
  const formatedBook = book
    .replace(/[^A-Z0-9.\n\s]/ig, '')
    .split('\n').filter(Boolean)
  
  const [first, ...rest] = formatedBook;
  const originalBalance = +first;
  let sumOfExpenses = 0;
    
  let result = [];
  result.push(`Original Balance: ${originalBalance.toFixed(2)}`);
  for (const item of rest) {
    const [id, name, valueStr] = item.split(' ');
    const value = +valueStr;
       
    sumOfExpenses += value;
    let presentBalance = originalBalance - sumOfExpenses;
    
    result.push(`${id} ${name} ${value.toFixed(2)} Balance ${presentBalance.toFixed(2)}`);
  }
  result.push(`Total expense  ${sumOfExpenses.toFixed(2)}`);
  result.push(`Average expense  ${(sumOfExpenses / rest.length).toFixed(2)}`);
  return result.join('\r\n');
}


var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`
var b1sol = `Original Balance: 1000.00\r
125 Market 125.45 Balance 874.55\r
126 Hardware 34.95 Balance 839.60\r
127 Video 7.45 Balance 832.15\r
128 Book 14.32 Balance 817.83\r
129 Gasoline 16.10 Balance 801.73\r
Total expense  198.27\r
Average expense  39.65`


console.log(balance(b1));
