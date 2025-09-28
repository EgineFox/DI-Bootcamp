// Exercise 1: Sum elements
// Write a JavaScript program to find the sum of all elements in an array.

const sum = array => array.reduce((acc, curVal) => acc + curVal, 0);
console.log(sum([1, 2, 3, 4]));

// Exercise 2 : Remove Duplicates
// Write a JavaScript program to remove duplicate items in an array.
const array1 = [2,2,2,5,5,5,5,6,8,9,4,4,4,6,7,9,8,3,21];
const array2 = [ ...new Set(array1)];
console.log(array2);