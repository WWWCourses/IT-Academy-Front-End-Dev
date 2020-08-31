{
  var x = 2;           // x e глобална променлива
  let y = 4;           // y e видима само в текущия блок
  const alpha = 2.34;  // alpha e видима само в текущия блок
}

console.log(`x=${x}`);
console.log(`y=${y}`);          // error: y is not defined
console.log(`alpha=${alpha}`);  // error: alpha is not defined