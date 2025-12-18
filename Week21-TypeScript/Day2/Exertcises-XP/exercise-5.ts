
const  getDetails = (name: string, age: number) => {
    const details: [ string, number, string] = [name, age, `Hello ${name}! You are ${age} years old.`]
    return details;
}

// Call the function and log the tuple
const details = getDetails("Alice", 25);
// Expected output
console.log(details);