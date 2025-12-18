// function overloading
function greet(): string;
function greet(name: string): string;

// function
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, stranger!";
    }
}

// Calls
console.log(greet());          // "Hello, stranger!"
console.log(greet("Ekaterina")); // "Hello, Ekaterina!"