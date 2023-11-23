//Declaring type safe functions
const intro = (name, age)=>{
    return `Hello my name is ${name} and I am ${age} years old`;
};
console.log(intro("John", 25));
// save as java script except you need to declare the type of the parameters and the return type
// Optional Parameters
const intro2 = (name, age)=>{
    if (age) return `Hello my name is ${name} and I dont know how old I am`;
    return `Hello my name is ${name} and I am ${age} years old`;
};
console.log(intro2("John"));
console.log(intro2("John", 98));
var AgeUnit;
// Much like Optional types, you can make parameters optional by adding a question mark after the parameter name
// Custom Parameters and Return Types
(function(AgeUnit) {
    AgeUnit["years"] = "years";
    AgeUnit["months"] = "months";
})(AgeUnit || (AgeUnit = {}));
const person1 = {
    name: "John",
    age: 25,
    ageUnit: "years",
    country: "USA"
};
const covertAgeToMonths = (person)=>{
    person.age = person.age * 12;
    person.ageUnit = "months";
    return person;
};
console.log(covertAgeToMonths(person1));
const person2 = {
    name: "John",
    age: 25,
    ageUnit: "years",
    country: "USA",
    greet (greeting) {
        return `${greeting} my name is ${this.name} and I am ${this.age} years old`;
    }
};
console.log(person2.greet("Hello"));
console.log(person2.greet("Good Afternoon"));
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination)=>{
    if (returnDateOrDepartingFrom instanceof Date && destination) return {
        departureDate: departureDate,
        returnDate: returnDateOrDepartingFrom,
        departingFrom: departingFromOrDestination,
        destination: destination
    };
    else if (typeof returnDateOrDepartingFrom === "string") return {
        departureDate: departureDate,
        departingFrom: departingFromOrDestination,
        destination: departingFromOrDestination
    };
    throw new Error("Invalid details provided");
};
console.log(reserve(new Date(), new Date(), "London", "Paris"));
console.log(reserve(new Date(), "New York", "Washington"));

//# sourceMappingURL=index.9caf0027.js.map
