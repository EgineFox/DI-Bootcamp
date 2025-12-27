// variant 1
let someValue: any = "Hello, Typescript!";

// variant 2
let strValue1: string = <string>someValue;

// variant 3
let strValue2: string = someValue as string;

// usage as a string:
console.log(strValue1.toUpperCase()); // HELLO, TYPESCRIPT!
console.log(strValue2.length); // 18