/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.floor(d));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** parseInt(d)); // 10000
console.log(a ** Math.floor(d)) //10000
console.log(a ** Math.round(d)) //10000
console.log(a ** Math.trunc(d)) //10000


// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(parseInt(d));
console.log(Math.round(d));
console.log(Math.trunc(d));

// Use Variables b + d To Get This Valus

console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.trunc(b)/Math.ceil(d))); // 67 => Number