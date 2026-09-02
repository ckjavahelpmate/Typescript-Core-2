
// Arrsy --> Object using spread operator

const arr = ["ck", "sdet", 25];
const obj = { ...arr }
console.log(obj)


// Object to array
const user = {
    name: "ck",
    role: "sdet",
    age: 25
};
let arrayOfEntries = [...Object.entries(user)]
console.log(arrayOfEntries) // [ [ 'name', 'ck' ], [ 'role', 'sdet' ], [ 'age', 25 ] ]

let arrayOfValues = [ ...Object.values(user)]
console.log( arrayOfValues) // [ 'ck', 'sdet', 25 ]

let arrayOfKeys = [ ...Object.keys(user)]
console.log( arrayOfKeys) // [ 'name', 'role', 'age' ]
