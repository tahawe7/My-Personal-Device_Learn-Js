// <---Q1--->
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let nameArr = zName.split(" ");
    return `${nameArr[0]} ${nameArr[1].substring(0, 1).toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    let number = "",
      numbers = "0123456789";
    for (let char of zAge) {
      if (parseInt(char)) {
        number += char;
      }
    }
    return `Your Age Is ${number}`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function specialMix(...data) {
  let sum = 0,
    allString = 1;
  for (let item of data) {
    if (!isNaN(parseInt(item))) {
      sum += parseInt(item);
      allString = 0;
    }
  }
  return allString ? "All Strings" : sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Strings
// <---Q4--->
