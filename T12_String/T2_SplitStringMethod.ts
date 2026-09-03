
// Split with single regex
let str = "Split with single regex"
console.log(str.split(" ")) //[ 'Split', 'with', 'single', 'regex' ]

// Split with multiple regex
str = "Java,TypeScript;Python|JavaScript";
console.log( str.split(/[,;|]/))


export{}
