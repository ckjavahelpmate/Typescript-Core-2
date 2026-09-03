import { error } from "node:console";

// Example 1
const promise = new Promise<string>((resolve, reject) => {

    setTimeout(() => {
        reject("Something went wrong");
    }, 2000);

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Aftre example 1")

// Example 2
function login(username: string, password: string): Promise<string> {

    return new Promise((resolve, reject) => {
        console.log("Verifying credentials")
        setTimeout(() => {
            if (username === "admin" && password === "1234") {
                resolve("Login successful");
            } else {
                reject("Invalid username or password");
            }
        }, 2000)

    });
}

login("admin", "1234").then(( result)=>{
    console.log( result)
}).catch((error)=>{
    console.log(error)
})