//Declaring type safe functions

const intro = (name: string, age: number):string => {
  return `Hello my name is ${name} and I am ${age} years old`
}

console.log(intro('John', 25))

// save as java script except you need to declare the type of the parameters and the return type


// Optional Parameters

const intro2 = (name: string, age?: number):string => {

  if (age){
    return `Hello my name is ${name} and I dont know how old I am`
  }
  return `Hello my name is ${name} and I am ${age} years old`
}

console.log(intro2('John'))
console.log(intro2('John', 98))

// Much like Optional types, you can make parameters optional by adding a question mark after the parameter name


// Custom Parameters and Return Types

enum AgeUnit {
  years = "years",
  months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
}

const person1: Person = {
  name: 'John',
  age: 25,
  ageUnit: AgeUnit.years,
  country: 'USA'
};

const covertAgeToMonths = (person: Person): Person => {

  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;

  return person;
}

console.log(covertAgeToMonths(person1))
// Thuis returns {name: 'John', age: 300, ageUnit: 'months', country: 'USA'}


// Function Call Signatures

type greetingFunction = (greeting: string) => string;

type PersonWithFunction = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
  greet: greetingFunction
}

const person2: PersonWithFunction = {
  name: 'John',
  age: 25,
  ageUnit: AgeUnit.years,
  country: 'USA',
  greet(greeting: string): string {
    return `${greeting} my name is ${this.name} and I am ${this.age} years old`
  }
};


console.log(person2.greet('Hello'))
console.log(person2.greet('Good Afternoon'))

//Function overloading

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
}



type Reserve = {
  (
  departureDate: Date,
  returningDate: Date,
  departingFrom: string,
  destination: string
  ) : Reservation| never;
  (
    departureDate: Date,
    departingFrom: string,
    destination: string
  ) : | Reservation | never;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if ( returnDateOrDepartingFrom instanceof Date && destination){
    return {
    departureDate: departureDate,
    returnDate: returnDateOrDepartingFrom,
    departingFrom: departingFromOrDestination,
    destination: destination
    };

  } else if (typeof returnDateOrDepartingFrom === 'string'){
    return {
      departureDate: departureDate,
      departingFrom: departingFromOrDestination,
      destination: departingFromOrDestination
    }
  }
  throw new Error('Invalid details provided')
};




console.log(reserve(new Date(), new Date(), 'London', 'Paris'))
console.log(reserve(new Date(), "New York", "Washington"));






