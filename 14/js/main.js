// Assignment 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let Answer1 = mix.filter((ele) => isNaN(parseInt(ele))).join("");

console.log(Answer1); // Elzero

// Assignment 2

let myString = "EElllzzzzzzzeroo";

let Answer2 = myString
  .split("")
  .filter((letter, pos, self) => self.indexOf(letter) === pos)
  .join("");
console.log(Answer2);

// Assignment 3

let myArray = ["E", "l", "z", ["e", "r"], "o"].reduce(
  (acc, val) => acc.concat(val),
  []
);
console.log(myArray);
// Elzero

// Assignment 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let Answer4 = numsAndStrings
  .filter((ele) => !isNaN(parseInt(ele)))
  .map((ele) => -ele);

// [-1, -10, 10, 20, -5, -3]

console.log(Answer4);

// Assignment 5

let nums = [2, 12, 11, 5, 10, 1, 99];

let Answer5 = nums.reduce(
  (acc, curent) => (curent % 2 === 1 ? acc + curent : acc * curent),
  1
);

// 500

console.log(Answer5);
