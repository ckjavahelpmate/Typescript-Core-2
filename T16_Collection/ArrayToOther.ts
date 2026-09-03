

let arr = [1, 2, 3, 4, 1, 2, 3, 4]
console.log("Array : ", arr)

// convert to object
let obj = { ...arr }
console.log("Object : ", obj)


// convert to set
let set = new Set<number>(arr)
console.log("Set : ", set)

//convert to map
let map = new Map<number, string>(
    arr.map( num => [num, num%2==0? "even":"odd"])
)
console.log("Map :", map )

export{}


