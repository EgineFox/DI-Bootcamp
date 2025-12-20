function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    return allowedTypes.includes(valueType);
}

const myString = "Hello";
const myNumber = 42;
const myBoolean = true;
const myObject = { name: "Ekaterina" };
const myArray = [1, 2, 3];
const myFunction = function () {
    console.log("Hi");
};
const myUndefined = undefined;

console.log(validateUnionType(myString, ["string", "number"])); // true
console.log(validateUnionType(myNumber, ["string", "number"])); // true
console.log(validateUnionType(myBoolean, ["string", "number"])); // false

console.log(validateUnionType(myObject, ["object"])); // true
console.log(validateUnionType(myArray, ["object"]));  // true 
console.log(validateUnionType(myFunction, ["object"])); // false

console.log(validateUnionType(myBoolean, ["boolean", "undefined"])); // true
console.log(validateUnionType(myUndefined, ["boolean", "undefined"])); // true
console.log(validateUnionType(myNumber, ["boolean", "undefined"])); // false