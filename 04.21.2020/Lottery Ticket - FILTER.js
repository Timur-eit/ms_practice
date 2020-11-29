function isMiniWin([letterPart, digitPart]) {
  // return Array.from(letterPart).map(x => x.charCodeAt(0)).includes(digitPart);
  return Array.from(letterPart).some(x => x.charCodeAt(0) === digitPart);
                    // ['A', 'B', 'C']
}

// "😂🤦🏻".split('') // ["\ud83d", "\ude02", "\ud83e", "\udd26", "\ud83c", "\udffb"]
// Array.from("😂🤦🏻") // ["😂", "🤦", "🏻"]

function bingo(ticket, win) {  
  return ticket.filter(isMiniWin).length >= win ? 'Winner!' : 'Loser!';
}


console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));


// Test.assertEquals(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
// Test.assertEquals(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
// Test.assertEquals(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');


console.log('😂'.split(''));

// 😊


