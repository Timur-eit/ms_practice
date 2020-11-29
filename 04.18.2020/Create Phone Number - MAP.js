// function createPhoneNumber(numbers){
//     let partOfString1 = '';
//     for (const item of numbers.slice(0, 3)) {
//         partOfString1 += item;
//     }
//     let partOfString2 = '';
//     for (const item of numbers.slice(3, 6)) {
//         partOfString2 += item;
//     }
//     let partOfString3 = '';
//     for (const item of numbers.slice(6)) {
//         partOfString3 += item;
//     }
//     return `(${partOfString1}) ${partOfString2}-${partOfString3}`;
// }


function createPhoneNumber(numbers){
	const numbersStr = numbers.join('');
	return `(${numbersStr.substring(0, 3)}) ${numbersStr.substring(3, 6)}-${numbersStr.substring(6)}`;
}

function createPhoneNumber(numbers, pattern = "(000) 000-0000"){
	let i = 0;
	return Array.from(pattern).map(x => {
		if (x !== "0") {
			return x;
		}
		const symbol = numbers[i];
		i += 1;
		return symbol;
	}).join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "+7 (000) 000-00-00"));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));







// describe('Basic tests', () => {
//     Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
//     Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
//     Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
//   });


// const n = numbers;
// return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;