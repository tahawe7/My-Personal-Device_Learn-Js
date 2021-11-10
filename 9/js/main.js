/* let newarr = [1, 2, "amer", "ali", "hossam", "mgady", "Shady", "wael"];
let onlyNames = [];

for (let i = 0; i < newarr.length; i++) {
  if (typeof newarr[i] === Number()) {
    onlyNames.push(newarr[i]);
  }
}

console.log(onlyNames);
 */
/* 
let Product = ["Keybord", "Mouse", "Pen", "Router", "Monitor"];

let colors = ["Red", "Green", "Blue"];

for (let p = 0; p < Product.length; p++) {
  console.log("#".repeat(10));
  console.log(`# ${Product[p]}`);
  console.log("#".repeat(10));
  console.log(`----Colors`);
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
}
 */
/* 

let colors = ["Red", "Green", "Blue"];

let showCount = 5;

document.write(`<h1>Show ${showCount} Product</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3> -${i + 1}-  ${Product[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }

  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}
 */
/* 
let Product = ["Keybord", "Mouse", "Pen", "Router", "Monitor", "Charger"];
let i = 0;
do {
  console.log(i);
  i++;
} while (false);
console.log(i);
 */

let Admins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let mYemployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Samer",
  "samer",
];
let xEmp = 0;
document.write(`We have ${Admins.length} admins
<hr/>
`);
let i = 0;
for (; i < Admins.length; i++) {
  if (Admins[i] === "Stop") {
    break;
  }
  document.write(
    `<br/><br/><div> The Admins of team ${i + 1} is ${Admins[i]} </div>`
  );
  document.write(`<h3>Team Members:</h3>`);

  for (let j = 0; j < mYemployees.length; j++) {
    if (mYemployees[j].toUpperCase().charAt(0) == Admins[i].charAt(0)) {
      xEmp++;
      document.write(`<div>- ${xEmp} ${mYemployees[j]}</div>`);
    }
  }
  xEmp = 0;
}

