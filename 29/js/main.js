let prom = prompt("Print Number From – To");

function Arrnge(userInput) {
  let arr = userInput.split("-");
  let small = arr.sort((a, b) => a - b)[0].trim();
  let large = arr.sort((a, b) => b - a)[0].trim();
  for (let i = small; i <= large; i++) {
    let currentElement = document.createElement("div");
    currentElement.textContent = i;
    document.body.append(currentElement);
  }
}

if (prom != "") {
  Arrnge(prom);
}
