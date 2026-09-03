
// 1.Required or regular parameter
function requiredParameter(pm1: number, pm2: number) {
    console.log(pm1 + pm1)
}

requiredParameter(10, 20); //30
// requiredParameter( 10 ) ; // CTE



// 2.Optional parameter -> optional parameter should be always after required paramter
function optionaParameter(pm1?: number, pm2?: number) {
    console.log("pm1 ", pm1)
    console.log("pm2 ", pm2)
    console.log("----------------------")
}
optionaParameter()
optionaParameter(10)
optionaParameter(10, 20)
optionaParameter(undefined, 20)

// 3.default parameter 
function defaultParameter(pm1: number = 25, pm2 = "ck") {
    console.log("Pm1 :", pm1)
    console.log("Pm2 :", pm2)
    console.log("-----------------------------")
}

defaultParameter() // 25, CK
defaultParameter(undefined, "Allen") // 25 , Allen
defaultParameter(10, "Allen") // 10, Allen


// 4. Object as Parameter
function printUser(user: { name: string; age?: number }) {
    console.log(user);
    console.log(user.name);
    console.log(user.age);
    console.log("----------------------")
}

printUser({ name: "CK" });
printUser({ name: "CK", age: 25 });

// 5. destructure object parameter
function greet({ name, age }: { name: string; age: number }) {
    console.log(name);
    console.log(age);
}

greet({ name: "CK", age: 25 });


export{}