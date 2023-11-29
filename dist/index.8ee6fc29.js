let personObject = {
    name: "John",
    email: "john@doe.ca",
    greet: console.log("Hello")
};
class PersonClass {
    //constructor function helps you set up or create objects based on a
    //class by giving them initial values or instructions.
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const person = new PersonClass("John", "email");
console.log(person);
console.log(person.greet());
// const person2 = new PersonClass();
// console.log(person)
// console.log(person2)
// console.log(person.greet())
class User {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
class AdminUser extends User {
    constructor(name, email, age, isAdmin, usersReport){
        super(name, email, age);
        this.isAdmin = true;
        this.isAdmin = isAdmin;
        this.usersReport = usersReport;
    }
}
const user = new User("Johnny", "bah", 99);
const adminUser = new AdminUser("Oak", "doe", 99, true, 1000);
console.log(user);
console.log(adminUser);
// Using shorthand for constructor function
// By declaring a constructor with a public name and age, we can skip declaring porperties in the class
// below is the same as above.
class Person2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Admin2 extends Person2 {
    returnName() {
        return this.name;
    }
}
let jeff = new Person2("Jeffory", 99);
let adminJeff = new Admin2("Jeffory the admin", 99);
console.log(jeff.getName());
console.log(adminJeff.returnName());

//# sourceMappingURL=index.8ee6fc29.js.map
