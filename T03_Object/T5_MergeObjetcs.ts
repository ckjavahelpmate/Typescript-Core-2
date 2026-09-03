const user1 = {
    name: "ck",
    age: 25
};

const user2 = {
    role: "sdet",
    company: "Sony"
};

const merged = { ...user1, ...user2 };
console.log(merged); // { name: 'ck', age: 25, role: 'sdet', company: 'Sony' }

const obj1 = {
    a: 1,
    b: 2
}
const obj2 = {
    a: 1,
    c: 3
}

console.log({ ...obj1, ...obj2 }) // { a: 1, b: 2, c: 3 }


export{}