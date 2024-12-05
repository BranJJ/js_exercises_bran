const prompt = require('prompt-sync')({sigint: true});

/* Constant game elements (Caps to indicate constants) */
const HAT = '^';
const HOLE = 'O';
const GRASS = '░';
const PLAYER = '*';

/* Constant game scenarios, messages to player (Caps to indicate constants) */
const WIN = 'Congratulations! You found the hat!';                          // WIN
const LOSE = 'Game Over! You lose!';                                        // LOSE
const OUT_BOUND = 'You stepped outside the field.';                         // OUT-OF-BOUNDS
const INTO_HOLE = 'You fell into a hole.';                                  // FALLEN-INTO-HOLE
const WELCOME = 'Welcome to Find Your Hat Game!';                           // WELCOME MESSAGE
const DIRECTION = 'Which direction? Up(w), Down(s), Left(a) or Right(d)?';  // INFORM USER OF DIRECTION CHOICES
const QUIT = 'Press q or Q to quit the game.';                              // INFORM USER HOW TO QUIT GAME
const END_GAME = 'Game Over! Thank you for playing.';                       // ENDED THE GAME
const NOT_RECOGNIZED = 'Input not recognized.';                             // INPUT NOT VALID

class Field {

    /* constructor for Field class */
    constructor(rows, cols) {
        this.rows = rows;                   // property to set up the no. of rows for the field
        this.cols = cols;                   // property to set up the no. of cols for the field
        this.field = new Array([]);         // property that represents the field for the game
        this.gamePlay = false;              // property to setup the gameplay
        this.playerRow = 0;                 // Initializing row of player for movement
        this.playerCol = 0;                 // Initializing col of player for movement
    }

    /* static method to welcome users */
    static welcomeMsg(msg){
        console.log(
            "\n*******************************\n" + 
            msg + 
            "\n*******************************\n"
        );
    }

    /* Generate the game field */
    generateField(){ 

        for (let i = 0; i < this.rows; i++){
            this.field[i] = new Array();            // Generate field rows
            for (let j = 0; j < this.cols; j++){
                if (Math.random() > 0.2) {          // Set percentage of holes approximate 20% (based on https://www.codecademy.com/projects/practice/find-your-hat image)
                    this.field[i][j] = GRASS        // Generate grass in field cols
                } else {
                    this.field[i][j] = HOLE         // Generate hole in field cols 
                }        
            }
        }
    }

    generateHat(){

        let tempHat = false;

        while (!tempHat) {

            let hatRow = Math.floor(Math.random() * (this.rows - 2)) + 2             // generate a random row for hat but not within the first 2 rows
            let hatCol = Math.floor(Math.random() * (this.cols - 2)) + 2             // generate a random col for hat but not within the first 2 columns

            const isSurroundedByHoles =                                                     // checking for HOLES around location of intented HAT
                (hatRow > 0 && this.field[hatRow-1][hatCol] === HOLE) &&                    // Above
                (hatRow < this.rows - 1 && this.field[hatRow + 1][hatCol] === HOLE) &&      // Below
                (hatCol > 0 && this.field[hatRow][hatCol - 1] === HOLE) &&                  // Left
                (hatCol < this.cols - 1 && this.field[hatRow][hatCol + 1] === HOLE);        // Right
            
            if (isSurroundedByHoles) {                                              // re-generate random row and col for HAT if isSurroundedByHole is true
                continue;
            }

            this.field[hatRow][hatCol] = HAT;                                       // generate location for hat
            tempHat = true;            
        }
    }
    

    /* Print out the game field */
    printField(){
        this.field.forEach((element) => {
            console.log(element.join(''));
        })
    }

    /* Start game */
    startGame(){
        this.gamePlay = true;                                   // start the game
        this.generateField(this.rows, this.cols);               // generate field with grass and holes
        this.generateHat()                                      // generate hat
        this.field[this.playerRow][this.playerCol] = PLAYER     // set the starting position of the character
        this.printField();                                      // initial field print
        this.updateGame();                                      // update game once
    }

    /* Update game */
    updateGame(){                                               // update the game
        /* get the user's direction  */
        let userInput = null;
        do{
            console.log(DIRECTION.concat(" ", QUIT));           // Ask player for input
            userInput = prompt();                               // Read player input
            
            /* update player's location */
            switch (userInput.toLowerCase()) {
                case 'w':                                       // user has entered up
                case 's':                                       // user has entered down                
                case 'a':                                       // user has entered left
                case 'd':                                       // user has entered right
                    this.updatePlayer(userInput.toLowerCase());
                    break;
                case 'q':                                       // user wants to quit the game
                    this.endGame();
                    break;
                default:                                        // unrecognizable input
                    console.log(NOT_RECOGNIZED);
                    break;
            }

            this.printField();                                  // print field
        } while (userInput.toLowerCase() !== 'q');              // allows user to quit the game
    }

    endGame(){
        console.log(END_GAME);                                  // inform player that the game has ended
        this.gamePlay = false;                                  // set gamePlay to false
        process.exit();                                         // quit the program
    }

    /* Update the player's movement and game condition */
    updatePlayer(movementInput){                                // Read player's input
        let movement = null;
        switch (movementInput) {                                // Translating input into directions
            case 'w':                                           // (w) translate to up movement
                movement = "up";
                break;
            case 's':                                           // (s) translate to down movement
                movement = "down";                              
                break;
            case 'a':                                           // (a) translate to left movement
                movement = "left";
                break;
            case 'd':                                           // (d) translate to right movement
                movement = "right";
                break;
            default:
                console.log(NOT_RECOGNIZED);                    // unrecognizable input
                break;
        }
        console.log("You moved " + movement + "!");      // Inform player of the movement made
        
        let newPlayerRow = this.playerRow;                      // Declaring variable to capture new player's row
        let newPlayerCol = this.playerCol;                      // Declaring variable to capture new player's col

        switch (movement) {                                     // updating new player's position depending on movement
            case "up":                                          // player moves up 1 row
                newPlayerRow--;
                break;
            case "down":                                        // player moves down 1 row
                newPlayerRow++;
                break;
            case "left":                                        // player moves left 1 col
                newPlayerCol--;
                break;
            case "right":                                       // player moves right 1 col
                newPlayerCol++;
                break;
            default:                                            // unrecognizable input
                console.log(NOT_RECOGNIZED);
                break;
        }

        if (this.field[newPlayerRow][newPlayerCol] === HOLE) {          // Checks for HOLE at the player's new position on field
            console.log(INTO_HOLE);
            this.endGame();
        }

        if (this.field[newPlayerRow][newPlayerCol] === HAT) {           // Checks for HAT at the player's new position on field
            console.log(WIN);
            this.endGame();
        }

        if (newPlayerRow > this.rows || newPlayerRow < 0 || newPlayerCol > this.cols || newPlayerCol < 0) {             // Checks player's new position is still on field
            console.log(OUT_BOUND);
            this.endGame();
        }

        this.field[this.playerRow][this.playerCol] = GRASS;             // Update player's old position to GRASS
        this.playerRow = newPlayerRow;
        this.playerCol = newPlayerCol; 
        this.field[this.playerRow][this.playerCol] = PLAYER;            // Update player's new position
    }

}

/* Calling static method to welcome the player */
Field.welcomeMsg(WELCOME);

const ROWS = Math.floor(Math.random() * 3 + 6);              // Generate random rows from 6 to 8
const COLS = Math.floor(Math.random() * 3 + 8);              // Generate random cols from 8 to 10
const field = new Field(ROWS, COLS);                         // Declaring and creating an instance of Field class with randomized rows and cols

field.startGame();                                           // Game start