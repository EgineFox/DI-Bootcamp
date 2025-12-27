type Person = {
    name: string;
    age: number;
}

type Job = {
    position: string; 
    department: string;
}
type Employee = Person & Job;

type Manager = Employee & {
    position: "Manager";
}

type Developer = Employee & {
    position: "Developer";
}

function isManager(employee: Employee): employee is Manager {
    return employee.position === "Manager";
}

function isDeveloper(employee: Employee): employee is Developer {
    return employee.position === "Developer";
}

function describeEmployee(employee: Employee): string {
    if (isManager(employee)) {
        return `${employee.name} is a Manager in ${employee.department} department, age ${employee.age}.`;
    } else if (isDeveloper(employee)) {
        return `${employee.name} is a Developer in ${employee.department} department, age ${employee.age}.`;
    } else {
        return `${employee.name} works as ${employee.position} in ${employee.department}, age ${employee.age}.`;
    }
}

const manager: Manager = {
    name: "Alice",
    age: 35,
    position: "Manager",
    department: "Sales"
};

const developer: Developer = {
    name: "Bob",
    age: 28,
    position: "Developer",
    department: "IT"
};

const otherEmployee: Employee = {
    name: "Charlie",
    age: 42,
    position: "Designer",
    department: "Marketing"
};

console.log(describeEmployee(manager));
// Alice is a Manager in Sales department, age 35.

console.log(describeEmployee(developer));
// Bob is a Developer in IT department, age 28.

console.log(describeEmployee(otherEmployee));
// Charlie works as Designer in Marketing, age 42.