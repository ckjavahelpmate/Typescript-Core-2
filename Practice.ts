function convert(value: string | number) {
    if (typeof value === "string") {
        return Number(value) + 1;
    }
    return value.toString() + "1";
}
 console.log(convert("20")); 
 console.log(convert(20));