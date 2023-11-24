// moving away from concrete types and using generics
const filter = (array, f)=>{
    let results = [];
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        if (f(array[i])) results.push(array[i]);
    }
    return results;
};
let numbers2 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
const greaterThanSeven = (item)=>{
    return item < 7;
};
let strings = [
    "cat",
    "bat",
    "rat",
    "mat"
];
const filterCats = (item)=>{
    return item === "cat";
};
const mapping = (array, f)=>{
    let results = [];
    if (array.length !== 0) {
        for(let i = 0; i < array.length; i++){
            let item = array[i];
            results.push(f(item));
        }
        return results;
    }
    return [];
};
const addAnotherAnimal = (item)=>{
    return item + ` ${item}`;
};
const timesBytwo = (item)=>{
    return item * 2;
};
const covertToString = (item)=>{
    return item.toString();
};
console.log("Times array by two results", mapping(numbers2, timesBytwo));
console.log("Adds another animal", mapping(strings, addAnotherAnimal));
console.log("Coverts to string", mapping(numbers2, covertToString));

//# sourceMappingURL=index.390de4a4.js.map
