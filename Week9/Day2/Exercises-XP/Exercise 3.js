const isString = value => typeof value === 'string';



console.log(isString('hello'));        // true
console.log(isString(5));   // false



/*Explanation:
- typeof value === 'string' checks if the type of the input is exactly a string.
- Arrays, numbers, objects, etc., will return false. */
