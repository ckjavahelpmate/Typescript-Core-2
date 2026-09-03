import * as fs from "fs";

const data = fs.readFileSync("./TestData/TextFile.txt", "utf-8");

const lines = data.split("\n");

for (const line of lines) {
    console.log(line);
}