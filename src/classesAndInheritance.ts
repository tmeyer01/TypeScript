

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

  private testUsersAge(age: number) {
    if(age > 200 || age < 0) {
      throw new Error('The age must be within range of 0-200')
    }

    return age;
  }

  constructor(private _name: string, private _age: number) {
    this.testUsersAge(_age);
    this._age = _age;

  }


  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  //set methods can only take max of 1 parameter
  public set age(age: number) {
    this.testUsersAge(age);
    this._age = age;
  }

  //get accesors can not have parameters and can only return a value
  public get age() {
    return this._age;
  }

}

const person : PersonClass = new PersonClass('John', 23);
// person.age = 29;

console.log(person)
console.log(person.name)
console.log(person.age)


