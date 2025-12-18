function checkNumber(num: number): string {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

// Example calls:
console.log(checkNumber(15));   // "positive"
console.log(checkNumber(-15));  // "negative"
console.log(checkNumber(0));    // "zero"