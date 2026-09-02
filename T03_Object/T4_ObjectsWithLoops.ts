const user = {
    name: "ck",
    role: "sdet",
    age: 25
};

console.log("\n All Object keys \n-----------------------------------")
for (let key in user) {
    console.log(key);
}

console.log("\n All Object key-values \n-----------------------------------")
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`);
}

export{}