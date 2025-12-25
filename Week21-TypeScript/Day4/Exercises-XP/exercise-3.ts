class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }
    static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(10, 5));       // 15
console.log(Calculator.subtract(10, 5));  // 5

const sum = Calculator.add(100, 50);
console.log(sum);  // 150

const difference = Calculator.subtract(100, 50);
console.log(difference);  // 50