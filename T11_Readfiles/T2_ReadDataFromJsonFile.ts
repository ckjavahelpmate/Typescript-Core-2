import * as fs from "fs";

const data = fs.readFileSync("./TestData/JsonFile.json", "utf-8");

const testCases = JSON.parse(data);

console.log(testCases.TC001);