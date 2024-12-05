/* Answers to the guessing game */
const ans = 10;
const ansString = "ten";

/* Prompt user for an input */
let userInput = prompt("Guess the number 0 - 10. Press q or Q to quit.");

while (userInput.toLowerCase() !== 'q') {

    /* Check what the user had entered */
    /* Use a strict equality operator to check answers */
    if (userInput === ans.toString() || userInput === ansString) {

        /* Acknowlege correct answer by user */
        alert("You are correct!");
        break;

    } else if (!userInput) {
        userInput = prompt("Invalid answer! Please try again.")

    } else {
        userInput = prompt("Wrong! Please try again. Press q or Q to quit.")
    }
}

