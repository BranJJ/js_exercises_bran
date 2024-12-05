/* instantiating a new Array object */

const arrCategories = new Array (
    {name: "Cat A", description: "Cars below 1600cc"},
    {name: "Cat B", description: "Cars above 1600cc"},
    {name: "Cat C", description: "Goods Vehicles and Buses"}
);

/* Array properties */
console.log(arrCategories.length);          // calling the array's property called length

console.log(arrCategories[0].name);         // calling the first element's property called name

console.log(arrCategories[1]["description"]);       // calling the second element's property called description

/* Array method() */
arrCategories.push({name:"Cat E", description:"Open"});
console.log(arrCategories);

/* In JavaScript, constructor functions are used to create objects */

function Person(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

/* Add a new property gender to Person constructor function */
Person.prototype.gender = "Male";
/* Add a new method getFullName() to Person constructor function */
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

const person1 = new Person("John", "Doe");
const person2 = new Person("Steve", "Smith");

console.log(person1.gender);
console.log(person2);
console.log(person1.getFullName());

/* Creating a new class called Bicycle and instantiating a new instance of Bicycle called smallRedBike */

class Bicycle {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }
}

const smallRedBicycle = new Bicycle("small", "red");

console.log(smallRedBicycle);
