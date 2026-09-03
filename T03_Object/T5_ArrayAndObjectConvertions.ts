
// Array --> Object using spread operator
const arr = ["ck", "sdet", 25];
const obj = { ...arr }
console.log(obj)

// Entries array to object
let arr2 = [ [ 'name', 'ck' ], [ 'role', 'sdet' ], [ 'age', 25 ] ]
const obj2 = Object.fromEntries(arr2)
obj2.name = "Allen"
console.log(arr2)
console.log(obj2)


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


export { }

