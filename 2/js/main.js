/*
    Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    [++a] [+] 
    [++a]
    - Value: 1
    - Explain: do plus 1
    [+]
    - Explain: This is concatonate Opraitor
*/

/*
    Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d*e); // 2000
console.log(-d + ++e * ++g + ++f ); // 173