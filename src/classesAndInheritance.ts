

// let personObject = {

//   name: "John",
//   email: 'john@doe.ca',
//   greet: console.log('Hello')

// }

// class PersonClass {
//   name: string;
//   email: string;


//   //constructor function helps you set up or create objects based on a
//     //class by giving them initial values or instructions.

//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }

//   greet() {
//     return `Hello ${this.name}`
//   }

// }

// const person = new PersonClass( 'John', 'email');
// console.log(person)
// console.log(person.greet())

// // const person2 = new PersonClass();

// // console.log(person)
// // console.log(person2)
// // console.log(person.greet())

// class User {
//   name: string;
//   email: string;
//   age: number;

//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }

// }

// class AdminUser extends User {
//   isAdmin: boolean = true;
//   usersReport: number;

//   constructor(name: string, email: string, age: number, isAdmin: boolean, usersReport: number) {
//     super(name, email, age);
//     this.isAdmin = isAdmin;
//     this.usersReport = usersReport;
//   }
// }

// const user = new User('Johnny', 'bah', 99);
// const adminUser = new AdminUser('Oak', 'doe', 99, true, 1000);

// console.log(user)
// console.log(adminUser)


// // Using shorthand for constructor function
// // By declaring a constructor with a public name and age, we can skip declaring porperties in the class
// // below is the same as above.
// class Person2 {
//   constructor(public name: string, public age: number) {}

//   public getName(){
//     return this.name;
//   }
// }

// class Admin2 extends Person2 {
//   public returnName(){
//     return this.name;
//   }
// }

// let jeff = new Person2('Jeffory', 99);
// let adminJeff = new Admin2('Jeffory the admin', 99);

// const person3 = new Person2('John', 9999);
// const mark = new Person2('Mark', -9999);

// console.log(jeff.getName())
// console.log(adminJeff.returnName())


// console.log(person3)
// console.log(mark)


class PersonClass {
  private _age: number | undefined;

  constructor(private name: string) {}

  public getName(){
    return this.name;
  }

  public set age(age: number) {
   if(age > 200 || age < 0) {
     throw new Error('Invalid age')
   }
    this._age = age;
  }
}
