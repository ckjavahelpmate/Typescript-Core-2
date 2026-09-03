
const user = {
    name: "ck",
    role: "sdet",
    age: 25
};
console.log("Object :", user)


// Convert to array
let keysArray = [ ...Object.keys(user)]
console.log( "keysArray", keysArray)

let valuesArray = [ ...Object.values(user)]
console.log( "valuesArray", valuesArray)

let entriesArray = [ ...Object.entries(user)]
console.log( "entriesArray", entriesArray)


//convert to map
let map = new Map(Object.entries(user))
console.log("Map :", map)

export{}