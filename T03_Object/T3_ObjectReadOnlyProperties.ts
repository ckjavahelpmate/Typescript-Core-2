
const user: {
    readonly name: string;
    age: number;
} = {
    name: "ck",
    age: 25
};

console.log(user.name); // ck
console.log(user.age);  // 25

user.age = 26; // ✅
// user.name = "John"; // ❌ Compile-time error

export{}