
// Function declaration
function add(a: number, b: number): number {
    return a + b;
}

add(5, 10); // ✅ 15



// Function expression
const add2 = function (a: number, b: number): number {
    return a + b;
}
add2(5, 10); // ✅ 15

// Arrow function
const add3 = (a: number, b: number): number => {
    return a + b;
}
add3(5, 10); // ✅ 15

// Arrow function with implicit return
const add4 = (a: number, b: number): number => a + b;
add4(5, 10); // ✅ 15

export{}