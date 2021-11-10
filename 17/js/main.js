// <lesson 1>
// let myIdElement = document.getElementById("My-Div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElements = document.getElementsByClassName("My-Span");
// let myQueryElement = document.querySelector(".My-Span");
// let myQueryElements = document.querySelectorAll("#My-Div");

// console.log(myIdElement);
// console.log(myTagElements);
// myTagElements[1].innerHTML = "text";
// console.log(myClassElements);
// console.log(myQueryElement);
// console.log(myQueryElements);

// console.log(document.links[1].href);

// </lesson 1>

// <lesson 2>
/* let myElement = document.querySelector(".js");
console.log(myElement.innerHTML);
console.log(myElement.textContent);
// myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://www.google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";

let myLink = document.querySelector(".link");
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));
myLink.getAttribute("class");
myLink.getAttribute("href");
myLink.setAttribute("href", "https://www.google.com");
myLink.setAttribute("target", "blank"); */
// </lesson 2>

// // <lesson 3>
// console.log(document.getElementsByTagName("p")[0].attributes);
// let myP = document.getElementsByTagName("p")[0];
// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log(`Not Found`);
// }
// console.log(document.getElementsByTagName("p")[0].attributes);
// // </lesson 3>

// <lesson 4>

myElement = document.createElement("div");
myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

// Append Comment To Element
myElement.appendChild(myComment);

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);

// </lesson 4>
