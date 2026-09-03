let map = new Map<string, number>()
map.set("Samsung", 8)
map.set("Apple", 3)
map.set("Oppo", 12)
map.set("Mi", 7)
console.log("Map :", map)

// Convert to array
let keysArray = [...map.keys()]
console.log("keysArray", keysArray)

let valuesArray = [...map.values()]
console.log("valuesArray", valuesArray)

let entriesArray = [...map]
console.log("entriesArray", entriesArray)

// Convert to object
let obj = Object.fromEntries(map)
console.log("Object :", obj)


