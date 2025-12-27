interface HasToString {
    toString(): string;
}

function formatInput<T extends HasToString>(input: T): string {
    // Type assertion 
    const formatted = input.toString() as string;
    
    return `Formatted: ${formatted}`;
}

console.log(formatInput(42));              // "Formatted: 42"
console.log(formatInput("Hello"));         // "Formatted: Hello"
console.log(formatInput(true));            // "Formatted: true"
console.log(formatInput([1, 2, 3]));       // "Formatted: 1,2,3"
console.log(formatInput({ name: "Bob" })); // "Formatted: [object Object]"