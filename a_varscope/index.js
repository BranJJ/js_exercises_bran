/* 
* Primitive Data Types 
*/

let pi = 3.142;                         // declare and initialise variable pi with a value of 3.142
console.log(typeof pi)                  // typeof checks the datatype of variable pi

let strValue = "Hello"                  // declare and initialise variable strValue with a string value of "Hello"
console.log(typeof strValue)            // returns a string datatype

let booleanValue = true;                // declare and initialise variable booleanValue with a boolean of true
console.log(typeof booleanValue)        // returns a boolean datatype

let init = null;                        // declare and initialise variable init with a datatype of null
console.log(typeof init);               // returns an object datatype (JS refers to null as an object)

let undefinedValue;                     // declare variable undefinedValue (no initialisation is performed)
console.log(typeof undefinedValue)      // returns a undefined datatype


/* 
* Non-primitive DataTypes 
*/

/* Arrays - reference types */

let arr = ["a", "b", "c"];              // declare and initialise an array with 3 elements

let faang = new Array();                // declare an array without initialisation
faang[0] = "FB";
faang[1] = "AMZN";
faang[2] = "APPL";
faang[3] = "NFLX";
faang[4] = "GOOG";                      // now array variable faang has 5 elements, starting with index 0

                
// How reference types work
function addCategory(items){            // function addCategory takes in an array of categories
    items.push("seafood");
}

let products = new Array();             // declare a new array variable called products
products[0] = "dried goods";            // index 0 of products = "dried goods"
products[1] = "canned goods";           // index 1 of products = "canned goods"

console.log(products);                  // dried goods, canned goods

addCategory(products);                  // passing in the array products as a reference
console.log(products);                  // dried goods, canned goods and seafood

/* 
* Objects 
*/

let person = {name: "Sam", age: 42};    // name is the key, "Sam" is the value, age is the key, and 42 is the value

let vehicle = new Object();             // another way to declare an Object
vehicle.brand = "Suzuki";               // key: brand , value: Suzuki
vehicle.model = "Swift";                // key: model, value: Swift

/* 
* Functions 
*/

let announce = function(){ console.log("Hello JS!") }; // Declare a new object as a function
let announce2 = ()=>{ console.log("Hello JS Again!")}; // Declare a new object as a function (arrow function)

announce();
announce2();

/* 
* Mutable and Immutable variables 
*/

let customerName = "John Doe";          // this is a MUTABLE variable using let
console.log(customerName);              // result: John Doe 

customerName = "John Don";              // we change the customer name
console.log(customerName);              // result: John Don

const GAMEWON = "You win!";             // this is an IMMUTABLE variable using const
const GAMELOST = "You lose!";           // this is an IMMUTABLE variable using const as well

let myGameLevel;                        // declare variable myGameLevel
myGameLevel = 1;                        // initialise variable myGameLevel with a value of 1


/* 
* Variable Scope 
*/

// Locally scoped variable - greeting
function greet(){
    let greeting = "Welcome FSD05 learners";    // variable greeting is locally scoped
    console.log(greeting);
}

// console.log(greeting);                          // an error will occur

// Locally and globally scoped variables 
var globalMsg = "Greeting!";

function welcome(){
    var localMsg = "Welcome FSD05 Learners";    // this variable is only locally accessible in the function
    console.log(globalMsg);                     // this variable is accessible inside the function
}

welcome();
// console.log(localMsg);                          // localMsg is not accessible (found in function welcome)


// Additional example of var variables and its scope

var globalMessage = "I'm a global variable";

function showMessage() {
    console.log(globalMessage);
}

showMessage();
console.log(globalMessage);


// ! The DANGERS of using var variables
var message = "Hello World!";
console.log(message);                           // Output: "Hello World"

var message = "Hello Universe!";                 
console.log(message);                           // Output: "Hello Universe"

// Updating the variable
message = "Hello Again!"                        // Which variable am I referring to
console.log(message);


// Why we should use let instead
let newMessage = "Hello World!";                // you cannot redeclare newMessage: let newMessage = "Hello World again!";


// ! Let Scope (BLOCK scoped)

let globalVar = "I'm global";

function checkScope(){
    
    if(true){
        let blockVar = "I'm inside the block";
        console.log(blockVar);
    }

    console.log(globalVar);                     // globalVar is accessible
    /* console.log(blockVar); */                      // blockVar is NOT accessible
}

checkScope();

/* 
* Typecasting 
*/

// Converting values to numbers using the Number object

console.log(Number("3.142"));       // 3.142, coverting a string rep. of a number to a number
console.log(Number(Math.PI));       // 3.14159..., converting a returned property from the Math object as a number
console.log(Number("     "));       // 0, converting a series of empty string to a number
console.log(Number(""));            // 0, converting an empty string to a number
console.log(Number("88 88"));       // NaN, converting a series of numbers with a space introduced
console.log(Number("Steve"))        // NaN, converting an alphabetical string 

// Converting values to string using the String object
console.log(String(new Date()));    // "Thu Nov 28 2024 10:22:42 GMT+0800 (Singapore Standard Time)"
console.log(String(9876));          // "9876" 
console.log(typeof String("9876")); // "9876"

// ! Converting values to boolean using the Boolean object

console.log(Boolean("1"));          // true, converting a string to a boolean
console.log(Boolean("0"));          // true,
console.log(Boolean(1));            // true, converting a number to a boolean
console.log(Boolean(0));            // false
console.log(Boolean(" "));          // true
console.log(Boolean(""));           // false
console.log(Boolean("John"));       // true
