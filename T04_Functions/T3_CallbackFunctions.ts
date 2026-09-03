
function calculate(a: number, b: number, operation: (x: number, y: number) => number) {
    return operation(a, b);
}

const add = (x: number, y: number) => x + y;

// passing a function expression
console.log(calculate(10, 20, add)); // 30

// Passing an arrow function
console.log(calculate(10, 20, (a, b) => a * b)) // 200


// Callback with type alias
type Callback = (a: number, b: number) => number;
function calculate2(a: number, b: number, callback: Callback) {
    return callback( a, b)
}

console.log(calculate(10, 20, (a, b) => a * b)) // 200




export{}