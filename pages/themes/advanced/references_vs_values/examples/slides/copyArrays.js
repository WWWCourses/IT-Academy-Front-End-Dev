/* -------------------------------------------------------------------------- */
/*                        create an array shallow copy                        */
/* -------------------------------------------------------------------------- */

/* -------------------------- with spread operator -------------------------- */
// let arr1 = [1,2,3];
// let arr2 = [...arr1];

// // we change a value in "arr1", and that WILL NOT reflect the "arr2" copy:
// arr1[0] = 9;
// console.log(`arr1: ${arr1}`);
// console.log(`arr2: ${arr2}`);

/* ------------------------ with array.slice() method ----------------------- */
// let arr1 = [1,2,3];
// let arr2 = arr1.slice();

// // we change a value in "arr1", and that WILL NOT reflect the "arr2" copy:
// arr1[0] = 9;
// console.log(`arr1: ${arr1}`);
// console.log(`arr2: ${arr2}`);

/* -------------------------------------------------------------------------- */
/*                         with Object.assign() method                        */
/* -------------------------------------------------------------------------- */
// let arr1 = [1,2,3];
// let arr2 = Object.assign([],arr1);

// // we change a value in "arr1", and that WILL NOT reflect the "arr2" copy:
// arr1[0] = 9;
// console.dir(arr1);
// console.dir(arr2);

