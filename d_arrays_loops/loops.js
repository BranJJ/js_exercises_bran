// Creating a for loop
const total = 10;

for (let i = 1; i <= total; i++) {          // counting from 1 to 10
    console.log(i);
}

for (let i = total; i >= 0; i--) {          // countDown 10 to 1 
    if (i === 0){
        console.log("Merry Christmas!")
    } else {
        console.log(i);
    }
}

// Timer of 500 ms for each count
// function greet() {                          // function to execute greetings
//     console.log("Merry Christmas!");
// }

// greetings = setInterval(greet, 500);        // call function greet() with 500ms

// function stopInterval(){                    // function to terminate greetings
//     clearInterval(greetings);
// }

// setTimeout(stopInterval, 10000);            // call setTimeout function

// Incorporate sleep timer of 500ms for each count 
// function showGreeting(i){
//     if (i === 0) {
//         console.log("Merry Christmas");
//     } else {
//         console.log(String(i));
//     }
// }

// for (let i = total ; i >= 0 ; i-- ){
//     setTimeout(() =>{
//         showGreeting(i);
//     }, (total - i) * 500);
// }

// For-Each loop 

const names = ['Tom', 'Dick', 'Harry'];

names.forEach((guest, key) => {
    console.log(key + 1 + ". Welcome " + guest);
});

// Do-while loop

let i = 1; 

do {
    console.log(i + " Hello World")
    i++;                    // incrementor
} while (i < 10);

// While loop

let countDown = 10; 

while (countDown >= 1) {
    console.log("Counting down " + countDown);
    if (countDown === 1) {
        console.log("Merry Christmas!");
    }
    countDown--;
}