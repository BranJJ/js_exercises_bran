// Assignment Operation Examples 

let a = 10;
let b = 20;

a = b;              // a gets assigned b's value. a becomes 20. 
console.log(a);     // 20

a += b;             // a = a + b
console.log(a);     // 40

a -=b;              // a = a - b
console.log(a);     // 20

a *= b;             // a = a * b
console.log(a);     // 400

a /= b;             // a = a / b
console.log(a);     // 20

a %= b;             // a = a % b
console.log(a);     // 0

a = 3;
b = 3; 

a **= b;            // a = a ** b
console.log(a);     // 27

/* Comparison Operation Examples (Boolean) */

let x = 5;

console.log(x == 9);        // false 

console.log(x == 5);        // true

x = '5';

console.log(x === 5);        // false (type checking)

console.log(x == 5);        // true

console.log(x != 5);         // false 

console.log(x !== 5);          // true

x = 7; 

console.log(x < 9);         // true

x = 9;

console.log(x <= 9);        // true

console.log(x > 9);         // false 

console.log(x >= 9);        //true 