

let personObject = {

  name: "John",
  email: 'john@doe.ca',
  greet: console.log('Hello')

}

class PersonClass {
  name: string;
  email: string;


  //constructor function helps you set up or create objects based on a
    //class by giving them initial values or instructions.

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hello ${this.name}`
  }

}

const person = new PersonClass( 'John', 'email');
console.log(person)
console.log(person.greet())

// const person2 = new PersonClass();

// console.log(person)
// console.log(person2)
// console.log(person.greet())

class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

}

class AdminUser extends User {
  isAdmin: boolean = true;

  constructor(name: string, email: string, age: number, isAdmin: boolean) {
    super(name, email, age);
    this.isAdmin = isAdmin;
  }
}

const user = new User('Johnny', 'bah', 99);
const adminUser = new AdminUser('Oak', 'doe', 99, true);

console.log(user)
console.log(adminUser)
