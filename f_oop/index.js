/* Old way, Use require to import files */
// const Car = require('./Car.js');
// const Supercar = require('./Supercar.js');

/* New way to import files */
import Car from "./Car.js";
import Supercar from "./SuperCar.js";

Supercar.welcomeMsg("Welcome to Supercar form page.")

/* myCar is an instance of Car class */
let myCar = new Car("Honda", "Civic", 2015);

console.log(myCar);

myCar.drive(200);

myCar.drive(200);

console.log(myCar.getTotalKilometersDriven())

/* mySuperCar is an instance of Supercar class */
/* Supercar class is a child class of Car class */
let mySuperCar = new Supercar("Maserati", "MC20", 2020);

console.log(mySuperCar);

mySuperCar.drive(500);

mySuperCar.getTotalKilometersDriven();

console.log(mySuperCar.warranty);

mySuperCar.setWarranty(false);

console.log(mySuperCar);        // warranty is now false
