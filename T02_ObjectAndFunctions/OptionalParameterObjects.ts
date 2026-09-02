
// Required paramters object
const user1: {
    name: string;
    role: string;
} = {
    name: "ck",  // remove this we get compile time error
    role: "sdet" // remove this we get compile time error
};

console.log( `Name : ${user1.name}`)
console.log( `Role : ${user1.role}`)


// Optional Parameter object
const user2: {
    name: string;
    role?: string; // its optional parameter
} = {
    name: "ck",  // remove this we get compile time error
}

console.log( `Name : ${user2.name}`)
console.log( `Role : ${user2.role}`) // string | undefined