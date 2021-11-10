// // <lesson 4>

// myElement = document.createElement("div");
// myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// // Append Comment To Element
// myElement.appendChild(myComment);

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Element To Body
// document.body.appendChild(myElement);

// // </lesson 4>

// <lesson 5>
// for (let i = 1; i <= 100; i++) {
//   // <practical application>
//   // Create Div
//   document.write(`[${i}]`);
//   let myDiv = document.createElement("div");
//   myDiv.className = "product";
//   // Create H3

//   // Append H3 To Div
//   let myH3 = document.createElement("h3");
//   myDiv.appendChild(myH3);

//   // Append Text To H3
//   let myTextH3 = document.createTextNode("This Is My Product");
//   myH3.appendChild(myTextH3);

//   // Create Paragraph
//   let myParagraph = document.createElement("p");
//   myDiv.appendChild(myParagraph);

//   // Append Text To Paragraph
//   let myParagraphText = document.createTextNode("This Is My Paragraph");
//   myDiv.appendChild(myParagraphText);

//   // Append Hr to div
//   let myHr = document.createElement("hr");
//   myDiv.appendChild(myHr);

//   document.body.appendChild(myDiv);

//   // </practical application>

// }
// </lesson 5>
// <lesson 6>
let myDiv = document.createElement("div");

console.log(myDiv);

// </lesson 6>
