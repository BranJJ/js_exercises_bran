/* 
* Example 1: Declare an array
*/
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray);

const myArray2 = new Array(1, 2, 3, 4, "Hello", true, null);
console.log(myArray2);

/* 
* Example 2: Built-in functions of the Array Object 
*/

// map() function
const mappedArray = [1, 2, 3, 4, 5, 6];

const multiplyBy10 = mappedArray.map(item => item * 10);    /* Shorter form for writing arrow function (no return required) */

const multiplyBy10Again = mappedArray.map((item) => {       /* Longer form for writing arrow function */
    const result = item * 10;
    console.log("new result: " + result);
    return result;
});

console.log(mappedArray);
console.log(multiplyBy10);
console.log(multiplyBy10Again);

// filter() function

const vowels = ["a", "e", "i", "o"];

const filteredVowels = vowels.filter(item => item === "a" || item === "u");

console.log(filteredVowels);    /* returns the results as an array: ["a"] */
console.log(filteredVowels[0]); /* to extract the value of the returned array */

// sort() function 

const num = [1, 2, 3, 4, 5, 7, 6];
const names = ["James", "Chris", "Max", "Lenon"];
// Using tenary operator 
const descendingNum = num.sort((a, b) => a > b ? -1 : 1);   // if a > b, swap position (-1), else remain (1)
console.log(descendingNum);     // descending swap

const ascendingNum = num.sort((a, b) => a > b ? 1 : -1);   // if a > b, keep position (1), else swap (-1)
console.log(ascendingNum);     // ascending swap

const sortDescendingIfElse = num.sort((a,b) => {        //rewriting tenary operation to an if-else statement
    if (a>b) {
        return -1;
    } else {
        return 1;
    }
});
console.log(sortDescendingIfElse);

// sort names in ascending order 
const ascendingNames = names.sort((a, b) => a > b ? 1 : -1);
console.log(ascendingNames);

// sort names in descending order 
const descendingNames = names.sort((a, b) => a > b ? -1 : 1);
console.log(descendingNames);

// reduce() function 

const numbers = [1, 2, 3, 4];
const productOfArr = numbers.reduce((a, b) => a * b);

console.log(productOfArr);

// push(), pop() functions

const alphanumericVal = ['a', 'b', 'c', 'd', 'e'];
alphanumericVal.push('f')       // same as running alphanumericVal[5] = 'f';
console.log(alphanumericVal);

alphanumericVal.pop();
console.log(alphanumericVal);

// shift(), unshift() functions

const alphanumericVal2 = ['w', 'x', 'y', 'z'];
alphanumericVal2.shift();
console.log(alphanumericVal2);
alphanumericVal2.unshift('w');
console.log(alphanumericVal2);

// slice() function, original array still intact

const arrNums = [1, 2, 3, 4, 5, 6];

const slicedArr = arrNums.slice(1, 3);     // .slice(startingindex, count)
console.log(slicedArr);             // count itself is not inclusive

// splice() function, original array is mutated

const splicedArr = arrNums.splice(1, 2);            // .splice(startingindex. count)
console.log(splicedArr);                // count itself is inclusive 
console.log(arrNums);

// using splice() on a shopping cart, cart is an array of Javascript Objects
const cart = [
    {id: 1, name:'Orange Juice'},
    {id: 2, name:'Paper Towels'},
    {id: 3, name:'Scotch Tape'}
];

const itemToRemove = 2;

console.log(cart);

const index = cart.findIndex(item => item.id === itemToRemove);
if (index !== -1) {
    cart.splice(index, 1);
    console.log(cart);      // removing item.id 2, which is Paper Towels
} else {
    console.log('Nothing to remove.');
}

// 2D Arrays
const arr2D = [
    [3, 2, 7],
    [2, 9, 5],
    [5, 1, 5]
];
console.log(arr2D);
const element = arr2D[1][1];
console.log("The element retrieved is:", element); 

const myField = [
    ['░', '░', 'O', '░'],
    ['*', 'O', '░', 'O'],
    ['░', '^', '░', '░'],
   ];
console.log(myField);

// iterate through 2D arrays 

const rows = 4; 
const cols = 4;
const array2D = [];

for (let i= 0; i < rows; i++ ){              // iterate through rows 
    array2D[i] = [];                         // create a new array for each row
    for (let j = 0; j < cols; j++){          // iterate through cols 
        array2D[i][j] = 0;                   // populate each col of the row with value 0
    }
}
console.log(array2D);

