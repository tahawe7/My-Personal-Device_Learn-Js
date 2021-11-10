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
let Product = ["Keybord", "Mouse", "Pen", "Router", "Monitor"];

let colors = ["Red", "Green", "Blue"];

mainLoop: for (let p = 0; p < Product.length; p++) {
  if (typeof Product[p] === "number") {
    continue;
  }
  console.log(`# ${Product[p]}`);
  nestedLoop: for (let c = 0; c < colors.length; c++) {
    console.log(`Colors:
      -- ${colors[c]}`);
    if (colors[c] === "Green") {
      break mainLoop;
    }
  }
}
