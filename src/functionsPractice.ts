//Declaring type safe functions

const intro = (name: string, age: number):string => {
  return `Hello my name is ${name} and I am ${age} years old`
}

console.log(intro('John', 25))
