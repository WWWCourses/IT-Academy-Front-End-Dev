console.log( "this in js file (Not a global scope in Node):", this );

function f(){
	console.log( "this in function call:", this );
}

f();