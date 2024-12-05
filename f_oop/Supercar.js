/* Old way to import Car from "./Car.js"  */
// const Car = require("./Car.js")

/* New way to import Car */
import Car from "./Car.js";

/* Supercar class is a child class of Car class */
class Supercar extends Car{

    /* constructor or Supercar calls the parent Car class */
    /* constructor can also have its own properties */
    constructor(make, model, year) {
        super(make, model, year);
        this.kilometersDriven = 50;         // overwrites parent Car class properties
        this.warranty = true;                       // Property of Supercar only
    }

    /* methods are inherited from parent Car class */
    drive(distance){
        super.drive(distance);
    }

    getTotalKilometersDriven(){
        super.getTotalKilometersDriven();
    }

    /* methods that belong only to Supercar class */
    setWarranty(status){
        this.warranty = status;
    }

    getWarranty(){
        return this.warranty;
    }

    /* static method belongs to the class, do not need to use objects/instance of class in order to call it. call it directly using <class>.staticmethod() */
    static welcomeMsg(msg){
        console.log("\n-----------------------------\n" + msg + "\n-----------------------------\n");
    }
}

/* Old way to export Supercar class */
// module.exports = Supercar;

/* New way to export Supercar class */
export default Supercar;


