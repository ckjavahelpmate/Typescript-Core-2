// Simple Object
const user = {
    name: "ck",
    role: "sdet"
};

console.log( `Name : ${user.name}`)
console.log( `Role : ${user.role}`)


// Object type annotaion
type user2 = {
    name: string;
    role: string;
}

// const user2: user2 = {
//     name: 102, 
//     role: 300
// }


// declare and intialize object
const user3: {
    name: string;
    role: string;
} = {
    name: "ck",
    role: "sdet"
};

console.log( `Name : ${user3.name}`)
console.log( `Role : ${user3.role}`)


export{}