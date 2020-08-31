/* -------------------------------------------------------------------------- */
/*                               copy by values                               */
/* -------------------------------------------------------------------------- */
let x = 1;
let y = x; // y stores the copy of "x" value

// we change the value in "x", but that did not reflect "y"
x = 9;
console.log(`x = ${x}`);
console.log(`y = ${y}`);

/* -------------------------------------------------------------------------- */
/*                              copy by reference                             */
/* -------------------------------------------------------------------------- */

/* ----------------------------- demo with array ---------------------------- */
// let arr1 = [1,2,3];
// let arr2 = arr1; // "arr2" stores a reference to the "arr1"

// // we change a value in "arr1", and that WILL reflect the "arr2"
// arr1[0] = 9;
// console.log(`arr1: ${arr1}`);
// console.log(`arr2: ${arr2}`);

/* ---------------------------- demo with objects --------------------------- */
let user1 = {
    name: "Maria",
    age: 33
}
let user2 = user1; // "user2" stores a reference to the "user1" object

// we change a value in "user1", and that WILL reflect the "user2" object:
user1.name = "Pesho";
console.log(`user1: ${user1.name}`);
console.log(`user2: ${user2.name}`);

