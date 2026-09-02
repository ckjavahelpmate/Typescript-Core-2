 let nums = [ 10, 20, 30] 
console.log( nums )

console.log("\n For loop \n------------------------------------")
for( var i=0 ; i< nums.length ; i++)
{
    console.log(`Element at inde ${i} : ${nums[i]}`)
}

console.log("\n For-of loop \n------------------------------------")
for( var num of nums)
{
    console.log( num )
}

console.log("\n For-in loop \n------------------------------------")
for( var idx in nums)
{
    console.log(`Element at inde ${idx} : ${nums[idx]}`)
}

console.log("\n Foreach loop \n------------------------------------")
nums.forEach( (num, index)=>{
    console.log(`Element at inde ${index} : ${num}`)
})





