// Function Declaration
function convertToGrams(weightKg) {
    return weightKg * 1000;
}
console.log(convertToGrams(2)); // Output: 2000



// Function Expression
const convertToGramsExpr = function(weightKg) {
    return weightKg * 1000;
};
console.log(convertToGramsExpr(3)); // Output: 3000



// Function declarations are hoisted, while function expressions are not.



// One-line Arrow Function
const convertToGramsArrow = weightKg => weightKg * 1000;
console.log(convertToGramsArrow(1.5)); // Output: 1500






