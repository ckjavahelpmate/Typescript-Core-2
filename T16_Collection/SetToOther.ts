
let set = new Set([1, 2, 3, 4, 2, 1])
console.log("Set : ", set)

// Convert to array
let arr = [...set]
console.log("Array :", arr)

//Convert to Object -> have to specify keys explicitly or convert to array then object
let obj = { ...set }
console.log("Object :", obj) // []


export{}
