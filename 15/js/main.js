// <Lesson 1>

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArr = [];

// for (let i = 0; i < myNums.length; i++) {
//   newArr.push(myNums[i] + myNums[i]);
// }
// console.log(newArr);

// // Same Idea With Map

// // let addSelf = myNums.map(function (ele, index, arr) {
// //   return ele + ele;
// //   // console.log("Current Element => "+ele)
// //   // console.log(`Current Index => ${index}`)
// //   // console.log(`Array => ${arr}`)
// //   // console.log(`This => ${this}`)
// // }, 10);

// let addSelf = myNums.map((ele) => ele + ele);
// console.log(addSelf);

// <Lesson 2>

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "ELz123er4o";
// //
// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // return ele === ele.toLowerCase() ? ele.toUpperCase() : ele.toLowerCase();
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// console.log(sw);

// //

// let inv = invertedNumbers.map((ele) => -ele);

// console.log(inv);

// //

// let ign = ignoreNumbers.split("").map(function(ele){
//   return isNaN(parseInt(ele)) ? ele : "" ;
// }).join("")

// console.log(ign);

// <Lesson 3>

// let addMap = numbers.map(function (ele) {
//   return ele + ele;
// });

// let addFilter = numbers.filter(function (ele) {
//   return ele + ele;
// });

// Test Map Vs Filter

// let frinds = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filterFrinds = frinds.filter((ele) => ele.startsWith("A"));

// console.log(filterFrinds);

// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function (ele) {
//   return ele % 2 === 0;
// });

// console.log(evenNumbers);

// <Lesson 4>

// let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence.split(" ").filter((ele) => ele.length <= 4).join(" ");

// console.log(smallWords);

// let mix = "A13BS2ZX";

// let filterCases = mix.split("").filter(function(ele){
//   return !isNaN(parseInt(ele))
// }).map(function(ele){
// return ele *ele
// }).join("");

// console.log(filterCases);

// <Lesson 5>

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`)
//   console.log(`Current element => ${current}`)
//   console.log(`Current element index => ${index}`)
//   console.log(`Array => ${arr}`)
//   console.log(`########`)
//   return acc + current
// },5+5);
// console.log(add)

// <Lesson 6>

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  // console.log(`Acc => ${acc}`);
  // console.log(`Current element => ${current}`);
  // console.log(acc.length > current.length ? acc : current);
  // console.log(`########`)
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current.toLowerCase()}`;
  });

console.log(finalString);

// function capitalizeFirstLetter(string) {
//   return string[0].toUpperCase() + string.slice(1);
// }

// console.log(capitalizeFirstLetter('foo')); // Foo
