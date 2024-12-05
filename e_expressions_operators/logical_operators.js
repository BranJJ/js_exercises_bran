/* && Logical operation */

let x = 10;
let y = 10;

console.log(x < 10 && y < 1)        // false &  false returns false

x = 9;
y = 1;

console.log(x < 10 && y < 1)        // true & false returns false

x = 9;
y = -1 

console.log(x < 10 && y < 1)        // true & true returns true

/* || Logical Operation */

x = 0;
y = 1;

console.log( x === 1 || y === 1);        // false or true returns true

x = 1;
y = 0;

console.log( x === 1 || y === 1);        // false or true returns true

x = 1;
y = 1; 

console.log( x === 1 || y === 1);        // true or true returns true

x = 0;
y = 0; 

console.log( x === 1 || y === 1);        // false or false returns false

/* ! Logical Operation */

console.log(!(x === y));                 // \!true returns false 

