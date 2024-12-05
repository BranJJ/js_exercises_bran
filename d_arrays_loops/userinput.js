const prompt = require("prompt-sync")({sigint: true});

let input = null; 

while (input === null || input === "") {
    input = prompt("Please enter your name: ")
}

do{
    input1 = prompt("Please tell me your name:");
} while (input1 === null || input1 === "");

if (input !== input1 ) {
    console.log("You are lying!");
} else {
    console.log("Hello " + input);
}