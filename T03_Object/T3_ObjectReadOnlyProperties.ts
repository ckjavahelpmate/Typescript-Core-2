
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


const user4: { readonly id: number; name: string; role?: string; } = { id: 101, name: "CK" };

const copy = { ...user4 }; copy.id = 102; copy.name = "John";

console.log(user4);
console.log(copy);



export { }