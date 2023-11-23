console.log("Hello World today");
let myName = "John";
console.log(myName.length);
//Anytype -> any type of data || avoid using it
let firstName = "John";
firstName = 10;
console.log(firstName);
//Boolean
let booleanValue = true;
//Litervalues
booleanValue = false;
console.log(booleanValue);
booleanValue = true;
console.log(booleanValue);
//Number type
let num = 10;
num = 10.5;
num;
num = Infinity;
num = parseInt("100");
console.log(num);
//BigInt
let bigInt1 = BigInt(93232);
console.log(bigInt1);
const helloWorld = 99;
let helloWorld2 = "Hello World";
helloWorld2 = helloWorld + helloWorld2;
console.log(helloWorld2);
console.log(typeof helloWorld2);
//Object
const car = {
    color: "red",
    brand: "Ford"
};
console.log(car);
const airplane1 = {
    model: "Boeing 737",
    flightNumber: "AA123",
    timeOfDeparture: new Date,
    timeOfArrival: new Date,
    caterer: {
        name: "John",
        address: "123 Main Street",
        phoneNumber: 5552323232
    }
};
console.log(airplane1);
const mashUpAnimal = {
    name: "Fido",
    age: 10,
    barks: true,
    meows: true,
    breed: "Mixed"
};
const addNumberOrString = (a, b)=>{
    if (typeof a === "number" && typeof b === "number") return a + b;
    return `${a} ${b}`;
};
console.log("TESTING addNumberOrString", addNumberOrString(1, 2));
console.log("-->", addNumberOrString("this is", " working"));
console.log("-->", addNumberOrString(100, " working"));
const jeffTallPerson = {
    name: "Jeff",
    height: 6.2,
    Clothing: {
        shirt: true,
        pants: "blue",
        belt: false,
        shoes: "nike"
    }
};
const sarahTallPerson = {
    name: "Sarah",
    height: 5.8,
    Clothing: {
        none: true
    }
};
//Arrays
// Below uses a union to allow for multiple types of data in the array
// not typically used as more room for erros
let c = [
    1,
    2,
    "3",
    "4"
];
const airplanes = [
    {
        model: "Boeing 737",
        flightNumber: "AA123",
        timeOfDeparture: new Date,
        timeOfArrival: new Date,
        caterer: {
            name: "John",
            address: "123 Main Street",
            phoneNumber: 5552323232
        }
    },
    {
        model: "Boeing 737",
        flightNumber: "AA123",
        timeOfDeparture: new Date,
        timeOfArrival: new Date,
        caterer: {
            name: "John",
            address: "123 Main Street",
            phoneNumber: 5552323232
        }
    }
];
//Tuples
let person;
const listOfPassingStudents = [
    3,
    true,
    "John",
    "Sarah",
    "Jeff"
];
console.log(listOfPassingStudents);
//TypeScript has readonly arrays
let numbers = [
    1,
    2,
    3,
    4,
    5
];
console.log(numbers);
// numbers.push(6)
//void function is a function that does not return anything
const addnumbers = ()=>{
    console.log(6);
};
addnumbers() //void function doesnt return anything but a never function will never return anything
;

//# sourceMappingURL=index.377278e2.js.map
