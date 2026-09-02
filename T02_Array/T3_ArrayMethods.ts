console.log("add at 999 last\n----------------------------------------------")
let nums = [5, 1, 4, 2, 3];
nums.push( 999)
console.log(nums) // [ 5, 1, 4, 2, 3, 999 ]

console.log("\nadd 888 begining\n----------------------------------------------")
nums = [5, 1, 4, 2, 3];
nums.unshift(888)
console.log(nums)//[ 888, 5, 1, 4, 2, 3 ]

console.log("\nremove last one\n----------------------------------------------")
nums = [5, 1, 4, 2, 3];
console.log( nums) // [5, 1, 4, 2, 3]
console.log( nums.pop()) // 3

console.log("\nremove first one\n----------------------------------------------")
nums = [5, 1, 4, 2, 3];
console.log( nums) // [5, 1, 4, 2, 3]
console.log( nums.shift()) // 5

console.log("\ncheck element present or  not\n----------------------------------------------")
nums = [5, 1, 4, 2, 3];
console.log( nums.includes(5)) // true
console.log( nums.includes(50)) // false

console.log("\nGet element index\n----------------------------------------------")
nums = [5, 1, 4, 2, 3];
console.log( nums.indexOf(5)) // 0
console.log( nums.indexOf(50)) // -1

console.log("\nGet array subset\n----------------------------------------------")
nums = [ 1, 2, 3, 4, 5 ]
console.log( "Subset :", nums.slice( 1, 4 ) ) // [ 2, 3, 4 ]
console.log( "original array :", nums ) // [ 1, 2, 3, 4, 5 ]

console.log("\nInsert elemet\n----------------------------------------------")
nums = [ 1, 2, 3, 4, 5 ]
console.log( nums ) 
console.log( nums.splice( 1, 0, 999 ) ) // [ ]
console.log( nums ) // [ 1, 999, 2, 3, 4, 5]

console.log("\nDelete elemet\n----------------------------------------------")
nums = [ 1, 2, 3, 4, 5 ]
console.log( nums )
console.log( nums.splice( 1, 2 ) ) // [ 2, 3 ]
console.log( nums ) // [ 1, 4, 5 ]

console.log("\nJoin elemets\n----------------------------------------------")
nums = [ 1, 2, 3, 4, 5 ]
console.log( nums) 
console.log( nums.join("-")) // 1-2-3-4-5

console.log("\nReverse elemets\n----------------------------------------------")
nums = [ 1, 2, 3, 4, 5 ]
console.log( nums.reverse() ) // [ 5, 4, 3, 2, 1 ]
console.log( nums ) //[ 5, 4, 3, 2, 1 ]

console.log("\nSort elements\n----------------------------------------------")
nums = [5, 1, 4, 2, 3];
console.log( nums.sort( ( e1, e2)=> e1-e2)) // [ 1, 2, 3, 4, 5 ]
console.log( nums.sort( ( e1, e2)=> e2-e1)) // [ 5, 4, 3, 2, 1 ]

console.log("\nMap elemets to sqrt\n----------------------------------------------")
nums = [ 1, 2, 3, 4, 5 ]
let arr = nums.map((ele)=> ele*ele)
console.log( "New Array :", arr) // [ 1, 4, 9, 16, 25 ]
console.log( "Original Array : ", nums ) // [ 1, 2, 3, 4, 5 ]

console.log("\nfilter odd elemets\n----------------------------------------------")
nums = [ 1, 2, 3, 4, 5 ]
arr = nums.filter((ele)=> ele%2==0)
console.log( "New Array :", arr) // [ 2, 4 ]
console.log( "Original Array : ", nums ) // [ 1, 2, 3, 4, 5 ]

console.log("\nfind sum of elements\n----------------------------------------------")
nums = [ 1, 2, 3, 4, 5 ]
let sum = nums.reduce((sum, current)=> sum+current, 0)
console.log("Sum :", sum)


export{}
