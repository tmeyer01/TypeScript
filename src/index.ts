// Into of TypeScript
// Learning about Types in TypeScript





console.log('Hello World today')

let myName: string = 'John'

console.log(myName.length)


//Anytype -> any type of data || avoid using it

let firstName: any = 'John'
firstName = 10;
console.log(firstName)

//Boolean

let booleanValue: boolean = true;

//Litervalues

booleanValue = false;

console.log(booleanValue)

booleanValue = typeof "John" === "string";

console.log(booleanValue)

//Number type

let num: number = 10;

num= 10.5;
num -3000;
num = Infinity * .01;
num = parseInt('100')
console.log(num)

//BigInt
let bigInt1 = BigInt(93232)
console.log(bigInt1)


const helloWorld = 99;

let helloWorld2 = "Hello World";

helloWorld2 = helloWorld + helloWorld2

console.log(helloWorld2)

console.log(typeof helloWorld2)


//Object

const car:{
  color: string;
  brand: string;
} = {
  color: 'red',
  brand: 'Ford'
}

console.log(car)


type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer
}

type Caterer = {
  name: string;
  address: string;
  phoneNumber: number;
}

const airplane1: Airplane = {
  model: 'Boeing 737',
  flightNumber: 'AA123',
  timeOfDeparture: new Date,
  timeOfArrival: new Date,
  caterer: {
    name: 'John',
    address: '123 Main Street',
    phoneNumber: 5552323232
  }
}

console.log(airplane1)

// Union Types
// Advantages of union types is that you can combine different types of data into one type

type Dog = {
  name: string;
  age: number;
  barks: boolean;
  breed: string;
}

type Cat = {
  name: string;
  age: number;
  meows: boolean;
  breed: string;
}

type HybridAnimal = Dog | Cat;

const mashUpAnimal: HybridAnimal = {
  name: 'Fido',
  age: 10,
  barks: true,
  meows: true,
  breed: 'Mixed'
}


// Union Types with primtive types
type NumberOrString = number | string;

const addNumberOrString = (a: NumberOrString, b: NumberOrString ) => {

  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;

  }
  return `${a} ${b}`



}



console.log('TESTING addNumberOrString',addNumberOrString(1,2))
console.log('-->',addNumberOrString("this is", " working"))
console.log('-->',addNumberOrString(100, " working"))


// Intersection Types are like union types but they combine the properties of the types and need all the properties to be present

// Index signatures

type TallPerson = {
  name: string;
  height: number;
  Clothing: Clothing;
}

type Clothing = {
  [clothing : string]: string | boolean;
};

const jeffTallPerson: TallPerson = {
  name: 'Jeff',
  height: 6.2,
  Clothing: {
    shirt: true,
    pants: 'blue',
    belt: false,
    shoes: 'nike'
  }
}

const sarahTallPerson: TallPerson = {
  name: 'Sarah',
  height: 5.8,
  Clothing: {
    none: true
  }
}

type MixedIndexedObject = {
  [key: string]: number;
  // [index: number]: string | number;
};


//Arrays
// Below uses a union to allow for multiple types of data in the array
// not typically used as more room for erros
let c: (number | string)[] = [1,2, "3", "4"]

type Airplaes = Airplane[];

const airplanes: Airplaes = [
  {
    model: 'Boeing 737',
    flightNumber: 'AA123',
    timeOfDeparture: new Date,
    timeOfArrival: new Date,
    caterer: {
      name: 'John',
      address: '123 Main Street',
      phoneNumber: 5552323232
    }
  },
  {
    model: 'Boeing 737',
    flightNumber: 'AA123',
    timeOfDeparture: new Date,
    timeOfArrival: new Date,
    caterer: {
      name: 'John',
      address: '123 Main Street',
      phoneNumber: 5552323232
    }
  }
]


//Tuples

// let person: [string, string, number?]

type ListOfStudents = [ number, boolean, ...string[]];

const listOfPassingStudents: ListOfStudents = [3, true, 'John', 'Sarah', 'Jeff']

console.log(listOfPassingStudents)

//TypeScript has readonly arrays

let numbers: readonly number[] = [1,2,3,4,5]

console.log(numbers)

// numbers.push(6)


//void function is a function that does not return anything
const addnumbers = (): void =>{
  console.log(2+4)
}

addnumbers()

//void function doesnt return anything but a never function will never return anything
