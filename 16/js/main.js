// function longestWordIn(sentence) {
//   let splArr = sentence.split(" ");
//   let longestLen = 0;
//   let longestWord;
//   for (let i = 0; i < splArr.length; i++) {
//     if (splArr[i].length > longestLen) {
//       longestLen = splArr[i].length;
//       longestWord = splArr[i];
//     }
//   }
//   return longestWord;
// }

// console.log(
//   longestWordIn("In Programming We Love Elzero Academy Tooooooooooooo Much")
// );

// function removeDuplicateWordsFrom(sentence) {
//   let theSentence = sentence.split(" ");
//   let result = [];
//   for (let i = 0; i < theSentence.length; i++) {
//     if (result.indexOf(theSentence[i]) === -1) {
//       result.push(theSentence[i]);
//     }
//   }
//   return result;
// }

// console.log(
//   removeDuplicateWordsFrom("السلام عليكم عليكم ورحمة الله وبركاته الله").join(
//     " "
//   )
// );

// function removeDuplicateWordsFrom(sentence) {
//   // let theSentence = sentence.split(" ");
//   // console.log(theSentence);
//   // let newSet = new Set(theSentence);
//   // console.log(newSet);
//   // // let arrFromSet = [...newSet];
//   // let arrFromSet = Array.from(newSet);
//   // console.log(arrFromSet);
//   // let arrayFromSet = arrFromSet.join(" ");
//   // console.log(arrayFromSet);
//   return [...new Set(sentence.split(" "))].join(" ");
// }

// console.log(
//   removeDuplicateWordsFrom("السلام عليكم عليكم ورحمة الله وبركاته الله")
// );

// function removeCharFrom(word, c) {
//   return word
//     .split("")
//     .filter(function (char) {
//       return char !== c.toLowerCase() && char !== c.toUpperCase();
//     })
//     .join("");
// }

// console.log(removeCharFrom("ElddzeroD WebDD ddSchool", "d"));
// console.log(removeCharFrom("ElxzeroX Web Sxchool", "x"));
// console.log(removeCharFrom("Elzero@ Web@@ @@School", "@"));

function addCommasAndUnderscore(num) {
  // Convert To String

  let result = num.toLocaleString("fr-EG");

  // Convert To Array
  result = result.split("");

  // Update The Last Comma Value
  result[result.length - 4] = "_";

  // Convert To String
  result = result.join("");
  return result;
}

console.log(addCommasAndUnderscore(120)); // 120
console.log(addCommasAndUnderscore(1530)); // 1_530
console.log(addCommasAndUnderscore(120510650)); // 120,510_650
console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032
