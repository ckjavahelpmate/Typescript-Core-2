
let str = "chethan5565@gmail.com"

// Remove special chars
console.log( str.replace(/[^A-Za-z0-9]/g, "")) //chethan5565gmailcom

// Remove numbers
console.log( str.replace(/[0-9]/g, "")) // chethan@gmail.com