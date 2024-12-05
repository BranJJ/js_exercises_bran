class Car{
    /* constructor holds the properties of the class*/
    constructor(make, model, year) {
        this.make = make;
        this.model = model; 
        this.year = year;
        this.kilometersDriven = 0;
    }

    /* methods */
    drive(distance){
        this.kilometersDriven += distance;
        /* Using template string to display data */
        console.log(`This ${this.year} ${this.make} ${this.model} has been driven ${this.kilometersDriven} km.`);
    }

    getTotalKilometersDriven(){
        return this.kilometersDriven;
    }

}

/* Old way to export Car class */
// module.exports = Car;

/* New way to export Car class */
export default Car;

