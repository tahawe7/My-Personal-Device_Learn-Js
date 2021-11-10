/*
var a = "welcome amer tahawe"

console.log(a.length)

console.log(a.substring(3,6));
console.log(a.substring(-5,6));
console.log(a.substring(a.length-6,a.length-0));
console.log(a.substr(-5,4));
console.log(a.includes("amer",5));

console.log(a.startsWith("w"));
console.log(a.startsWith("amer",8));

console.log(a.endsWith("amer",13));
*/
//______________________________________________________________________
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); // Zero

// 8 H
console.log((a.substring(a.length-4,a.length-3).toUpperCase()).repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0,6)} ${a.substr(11,6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase()+a.slice(1,a.length-1)+a.slice(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl