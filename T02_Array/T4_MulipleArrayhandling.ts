

// merge 2 array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

//Usnig spread operator
let merged = [...arr1, ...arr2];
console.log(merged);

// using concate method
merged = arr1.concat(arr2);
console.log(merged);


export{}