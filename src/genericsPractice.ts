// moving away from concrete types and using generics

type Filter = {
  <T>(
    array: T[],
    f: (item: T) => boolean
  ): T[];
}

const filter: Filter = (array: any[], f: Function) => {
  let results: any[] = [];
  for(let i = 0; i < array.length; i++){
    let item = array[i];
    if(f(array[i])){
      results.push(array[i])
    }
  }
  return results;
}

let numbers2 = [1,2,3,4,5,6,7,8,9,10]

const greaterThanSeven = (item: number) =>{
  return item < 7
}

let strings = ["cat", "bat", "rat", "mat"];
const filterCats = (item: string) => {
  return item === "cat";
}

// console.log(filter(numbers2, greaterThanSeven));
// console.log(filter(strings, filterCats));

// where can generics be used?
// after a type



type genericMap = {
  <T, U>(
    array: T[],
    f: (item: T) => U
  ): U[];
}




const mapping: genericMap = (array: any[], f: Function) => {

  if (array.length === 0) {
    return array;
  }
  let reuslts = [];

  for (let i = 0; i < array.length; i++) {
    reuslts.push(f(array[i]))
  }
  return reuslts;
}

const map = <T, U>(array: T[], func:(item: T) => U) =>{
  if (array.length === 0) {
    return array;
  }

  let results = [];

  for (let i = 0; i < array.length; i++) {
    results.push(func(array[i]));
  }
  return results;

}


const addAnotherAnimal = (item: string) => {
  return item +  ` ${item}`
}

const timesBytwo = (item: number) => {
  return item * 2
}

const covertToString = (item: number) => {
  return item.toString()
}

console.log('Times array by two results', map(numbers2, timesBytwo));
console.log('Adds another animal', map(strings, addAnotherAnimal));
console.log('Coverts to string', map(numbers2, covertToString));


console.log('Times array by two results', mapping(numbers2, timesBytwo));
