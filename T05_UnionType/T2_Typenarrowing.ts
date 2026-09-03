
// When union is used its like upcasting done, so we need to narrowdown to access properties

let obj: { id: string, name: string } | { id: number, name: string }

obj = { id: "ck-101", name: "Ck" }
// obj = { id:101, name:"Ck" } 
if (typeof obj.id === "string") {
    console.log(obj.id.toUpperCase())
}



// with functions
function printUser(user: { name: string; age: number } | { name: string; role: string }) {
    // console.log(user.age); // CTE
    if ("age" in user) {
        console.log(user.age);
    }
    else {
        console.log(user.role);
    }
}

export{}