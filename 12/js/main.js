// Assignments 1

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let nameF = zName.split(" ");
    return `${nameF[0]} ${nameF[1].substring(0, 1).toUpperCase()}.`;
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    let number = "",
      numbers = "0123456789";
    for (let char of zAge) {
      if (numbers.includes(char)) {
        number += char;
      }
    }
    return `Your Age Is ${number}`;
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, You Live In ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

///////////////////////////////////////////////////////////////////////////////////////////////

// // <---Q1--->
// function getDetails(zName, zAge, zCountry) {
// 	function namePattern(zName) {
// 		let nameArr = zName.split(" ");
// 		return `${nameArr[0]} ${nameArr[1].substring(1, 2).toUpperCase()}.`;
// 	}
// 	function ageWithMessage(zAge) {
// 		let number = "",
// 			numbers = "0123456789";
// 		for (let char of zAge) {
// 			if (numbers.includes(char)) {
// 				number += char;
// 			}
// 		}
// 		return `Your Age Is ${number}`;
// 	}
// 	function countryTwoLetters(zCountry) {
// 		return `You Live In ${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`;
// 	}
// 	function fullDetails() {
// 		return `Hello ${namePattern(zName)}, ${ageWithMessage(
// 			zAge
// 		)}, ${countryTwoLetters(zCountry)}`;
// 	}
// 	return fullDetails();
// }

// console.log(getDetails("Osama Mohamed Zaher", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali Fekry", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY
// // <---Q1--->
