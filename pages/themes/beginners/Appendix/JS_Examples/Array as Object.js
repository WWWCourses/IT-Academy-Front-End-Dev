var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// LENGTH: броят на елементите на масива
console.log("rainbow.length=" + rainbow.length);

// REVERSE(): преобръщане на масива (отзад на пред)
rainbow.reverse();
console.log("reversed rainbow= " + rainbow);

// POP(): премахване на последния елемент на масива
var popedElement = rainbow.pop();
console.log("popedElement=" + popedElement + "\nnew rainbow=" + rainbow);

// SHIFT(): премахване на първия елемент на масива
var shiftedElement = rainbow.shift();
console.log("shiftedElement=" + shiftedElement + "\nnew rainbow=" + rainbow);

// PUSH(): добавяне на елемент/и в края на масива
var pushResult = rainbow.push("black", "white");
console.log("pushResult=" + pushResult + "\nnew rainbow=" + rainbow);

// UNSHIFT(): добавяне на елемент/и в началото на масива
var unshiftResult = rainbow.unshift("black", "white");
console.log("unshiftResult=" + unshiftResult + "\nnew rainbow=" + rainbow);

// масива като обект
console.dir(rainbow);