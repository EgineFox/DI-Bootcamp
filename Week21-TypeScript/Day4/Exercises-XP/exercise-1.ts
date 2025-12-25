class Employee {
// Private properties
private name: string;
private salary: number;
// Public properties
public position: string;
// Protected properties
protected department: string;

// Constructor to initialize these properties
constructor( name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
}
// Public method
public getEmployeeInfo(): string {
return `Name: ${this.name}, Position: ${this.position}`;
}

}

// Usage:
const employee1 = new Employee("Ekaterina", 50000, "Full Stack Developer", "IT");

console.log(employee1.position); 
console.log(employee1.getEmployeeInfo());