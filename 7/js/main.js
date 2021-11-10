// chalenge 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(false, true - true - true)); // ["Ahmed", "Elham", "Osama"];

// chalenge 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

// chalenge 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(
  finalArr +
    [
      arrTwo.slice(2, 3),
      arrOne.slice(2, 3),
      arrOne.slice(1, 2),
      arrOne.slice(0, 1),
      arrTwo.slice(1, 2),
      arrTwo.slice(0, 1),
    ]
); // ["Z", "X", "D", "C", "B", "A"]

// chalenge 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(`${words[true + true][0].slice(true + true).toUpperCase()}`); // ZERO

// chalenge 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if ((needle = haystack)) {
  console.log("Found");
}
switch ((needle = haystack)) {
  case 0:
    console.log("Found");
    break;
}

needle = haystack ? console.log("Found") : console.log("unKnown");

// chalenge 6

let arr1 = ["A" , "C" , "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = [arr2[true + true], arr1[true + true], arr2[true + true + true]].toString().replace(/,/g,'').toLowerCase()

console.log(allArrs); // fxy

