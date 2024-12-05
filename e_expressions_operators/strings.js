/* String Operations */

let s1 = "Greetings ";
let s2 = "Learners";

let output = s1 + s2;           // non-mutated
console.log(output);            // Prints Greetings Learners

s1 += s2;                       // s1 is reassigned with s1 + s2
console.log(s1);            // Prints Greetings Learners

/* String Methods */

let x1;                         // Declare variable for x1
let x2;         
let x3;
let x4 = " Good morning! "        // Declare and initializing for x4

x1 = "Greetings";               // Assigning value to x1
x2 = "Learners";

result = x1.toLowerCase();      // greetings
console.log(result);

result = x1.toUpperCase();      // greetings
console.log(result)

console.log("'" + x4.trim() + "'");             // trimStart() trimEnd() exist too

let forbiddenStatus = 403;
console.log(typeof forbiddenStatus.toString());         // returns 403 as string
let convertedStr = forbiddenStatus.toString();
console.log(typeof convertedStr);

let x5 = "Hello World";
console.log(x5.split(" "));         // ["Hello", "World"] , during this time x5 is not mutated
let welcomeMsg = x5.split(" ");
console.log(welcomeMsg[0]);         // retrieves Hello

let helloCoders = "Hello World JS Coders";
arr = helloCoders.split(" ", 3);        // returns an array of 3 of the total 4 elements  
console.log(arr);

/* Obtain the current day of the week and print a custom message */
const currDate = Date.now()             // returns milliseconds of today's date calculated from 1 Jan 1970
const today = new Date(currDate);
console.log(today.toDateString());      // toDateString() returns a formatted date, (day month date year)
let splitToday = today.toDateString();
splitToday = splitToday.split(" ", 1);  // splitting " " and only returning 1 result 
console.log(splitToday);                // prints Tue
let day = splitToday[0];

switch(day){
    case "Mon":
        console.log("Monday Blues!");
        break;
    case "Tue":
    case "Wed":
    case "Thu":
        console.log("Happy Coding Day!")
        break;
    case "Fri":
        console.log("TGIF!");
        break;
    default: 
        console.log("Weekend is here!")
        break;  
}

/* Slicing strings */
let welcomeMsg2 = "Hello World";
console.log(welcomeMsg2.slice(0, 5));

let username = "john doe";
let splitUsername = username.split(" ");
console.log(splitUsername);

let firstName = splitUsername[0].charAt(0).toUpperCase() + splitUsername[0].slice(1, splitUsername[0].length);
let lastName = splitUsername[1].charAt(0).toUpperCase() + splitUsername[1].slice(1, splitUsername[1].length);
fullName = firstName + " " + lastName;

console.log(fullName);

/* Convert S1234567A to XXXXX567A, suitable for display */
let ID = "S1234567A";
let displayID = "XXXXX";

displayID += ID.slice(5);

console.log(displayID);

/* String Concatenation */
let fName = "Willy";
let lName = "Wonka";
let characterName = fName.concat(" ", lName);
console.log(characterName);

/* Extracting part of string via substring  */
let language = "JavaScript";
let substr = language.substring(0, 4);
console.log(substr);

let language2 = "Java";
let substr2 = language2.substring(1);
console.log(substr2);

