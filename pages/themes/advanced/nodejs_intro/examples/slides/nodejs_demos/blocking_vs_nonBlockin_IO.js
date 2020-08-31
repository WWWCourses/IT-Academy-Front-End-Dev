const fs = require('fs');

let fileName = './someData.txt';

function blockingRead(fileName) {
	const data = fs.readFileSync(fileName, 'utf8'); // blocks here until file is read
	console.log(`Sync data read:`);
	console.log(data);
}

function nonBlocking(fileName) {
	fs.readFile(fileName,'utf8', (err, data) => {
		if (err) {
			throw err;
		}else{
			console.log(`Async data read:`);
			console.log(data);
		}
	});
}

console.log(`~~~ 1 ~~~ `);
blockingRead(fileName);
console.log(`~~~ 2 ~~~ `);

console.log(`~~~ 3 ~~~ `);
nonBlocking(fileName);
console.log(`~~~ 4 ~~~ `);