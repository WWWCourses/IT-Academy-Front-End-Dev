var firstName = "Ada";

function foo(){
	firstName = "Turing" // тук променяме глобалната променлива!!!
	console.log("foo() firstName: ", firstName);
}
foo();

console.log("global firstName: ", firstName);