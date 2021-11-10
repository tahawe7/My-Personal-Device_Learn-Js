/*console.log(100 == "100");
console.log(-100 != "-100");

console.log(100 === "100");
console.log(100 === 100);
console.log(100 !== 100);*/
////////////////////////////////////////////
/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
// Start Conditional Ternary Operator

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

// End Conditional Ternary Operator

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
if (st !== "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (st != "number") {
  console.log("Good");
}

if (st != "ElzeroElzero") {
  console.log("Good");
}
