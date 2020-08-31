function	blockCode(){
	for(let i=0; i<100000000; i++){
		i**i;
	}
	console.log(`loop actions end`);
}

function doNotBlock(){
	setTimeout(_=>console.log(`setTimeout actions end`), 3000)
}



// the function will return a promise, wrapping non-promises in it, if needed
async function asyncFoo(foo){
	let promise = new Promise((resolve, reject) => {
	   foo()
	 });

	 let result = await promise; // wait till the promise resolves (*)

	 console.log(`asyncFoo END`); // "done!"
}


asyncFoo(blockCode);
console.log(`blockCode finish`);
asyncFoo(doNotBlock);
console.log(`doNotBlock finish`);
console.log(`END`);
// blockCode()