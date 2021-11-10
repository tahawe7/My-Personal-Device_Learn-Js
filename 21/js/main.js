// <lesson 7>
document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};

let userInput = document.querySelector(`form input[name=username]`);
let ageInput = document.querySelector(`form input[name=age]`);

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
    console.log("User Is valid");
  } else {
    console.log(`=======
User Is Not Valid
=======`);
  }

  if (ageInput.value !== "") {
    ageValid = true;
    console.log("Age Is Valid");
  } else {
    console.log(`=======
Age Is Not Valid
=======`);
  }
  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

// </lesson 7>
