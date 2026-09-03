
let str = "Hello CK"

console.log("String length :", str.length) //8

// Getting single char from string
console.log("0th index char :", str[0]) // H
console.log("0th index char :", str.charAt(0)) // H

// Search/finding
console.log("index C :", str.indexOf("C")) // 6
console.log("index Z :", str.indexOf("Z")) // -1

console.log("is it starts with H : ", str.startsWith("H")) // true
console.log("is it ends with H : ", str.endsWith("H")) // false

console.log("does it contain CK :", str.includes("CK")) // true
console.log("does it contain PK :", str.includes("PK")) // false

// Get string subset
console.log("get substring ell :", str.substring(1, 4)) // ell
console.log("get substring ell :", str.slice(1, 4)) // ell

// modify/replace
console.log( "Replace 1st l with * : ", str.replace("l", "*")) // He*lo CK
console.log( "Replace all l with * : ", str.replace(/l/g, "*")) // He**o CK
console.log( "Replace all l with * : ", str.replaceAll("l", "*")) // He**o CK


// Split
let words = str.split(" ")
console.log( words)

export{}