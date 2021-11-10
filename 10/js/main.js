// // Assignment 1

// let start = 10;
// let end = 100;
// let exclude = 40;
// let Output = [];

// for (let i = start; i <= end; i = i + 10) {
//   if (i === 40) {
//     continue;
//   }
//   console.log(i);
// }

//// Assignment 2
// let Start = 10;
// let End = 0;
// let Stop = 3;
// console.log("Assignment 2");
// for (let j = Start; j >= Stop; j--) {
//   if (j < Start) {
//     console.log("0" + j);
//     continue;
//   }
//   console.log(j);
// }

let start = 1;
let end = 6;
let breaker = 2;
for (let i = start; i <= end; i++) {
  console.log(i);
  for (let j = breaker; j < end; j = j + 2) {
    console.log(`-- ${j - breaker+breaker}`);
  }
}

// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4 */
