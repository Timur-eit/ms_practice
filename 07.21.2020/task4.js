function get(src, path) {
	const pathArr = path.split('.');	
	let pathPart = src[pathArr[0]];	
	let tmpPathPart = pathPart;
	
	for (let i = 1; i < pathArr.length; i++) {
		pathPart = tmpPathPart[pathArr[i]];		
		tmpPathPart = pathPart;
	}
	return pathPart;
}

var fixture = {
	foo: {
		bar: [
			{qux: 'bingo'},
		],
	},
};

console.log(get(fixture, 'foo.bar.0.qux'));

// Проверка
// console.log(get(fixture, 'foo.bar.0.qux') === 'bingo');

// console.log(fixture['foo']['bar']['0']['qux']);

// Object.assign(target, ...sources)

let pathPart = fixture['foo'];
let tmpPath = pathPart;

pathPart = tmpPath['bar'];
tmpPath = pathPart;

pathPart = tmpPath['0'];
tmpPath = pathPart;

pathPart = tmpPath['qux'];
tmpPath = pathPart;

// console.log(tmpPath);





// ['foo']['bar']['0']['qux']

// const path = 'foo.bar.0.qux';
// console.log(path.split('.'));