let personObject = {
    name: "John",
    email: "john@doe.ca",
    greet: console.log("Hello")
};
class PersonClass {
    //constructor function helps you set up or create objects based on a
    //class by giving them initial values or instructions.
    constructor(name, email){
        this.name = "John";
        this.email = "johnsemail@email.com";
        console.log("name: ", name);
        console.log("email: ", email);
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const person = new PersonClass("John", "email");
console.log(person);
console.log(person.greet()) // const person2 = new PersonClass();
 // console.log(person)
 // console.log(person2)
 // console.log(person.greet())
;

//# sourceMappingURL=index.8ee6fc29.js.map
