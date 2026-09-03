
// Union with variables
let id : number | string ;
id = 101
console.log("Id :", id) // 101

id = "Ck-101"
console.log("Id :", id) // Ck-101


// Union with array
let arr : number[] | string[] ; // either number[] or string[]
arr = [1, 2, 3]
console.log("arr : ", arr) // [1, 2, 3]

arr = ["Ck", "Pk", "kk"]
console.log("arr : ", arr) // ["Ck", "Pk", "kk"]

let arr2 : (number|string)[] // Array with either number or string elements
arr2 = [ 10, "ck", 25]


// Union with objects
let obj : { id:string, name:string} | { id:number,name:string} 

obj = { id:"ck-101", name:"Ck" }
console.log( obj) // { id: 'ck-101', name: 'Ck' }

obj = { id:101, name:"Ck" }
console.log( obj) // { id: 101, name: 'Ck' }


// Union with functions
function unionFunction( id:number|string)
{
    console.log("Recieved Id :", id)
}
unionFunction(101)
unionFunction("Ck-101")



export{}
