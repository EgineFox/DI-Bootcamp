//Exercise 1 : Colors. 
// Using this array :
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

//Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}


// Exercise 2 : Colors #2

//Using these arrays :
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const ordinal = ["th","st","nd","rd"];

//Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

// Loop through the colors array
colors.forEach((color, index) => {
  const position = index + 1;

  // Determine the correct ordinal suffix
  const suffix = (position === 1) ? ordinal[1] : (position === 2) ? ordinal[2] :                (position === 3) ? ordinal[3] : ordinal[0];

  console.log(`${position}${suffix} choice is ${color}.`);
});

// Exercise 3 : Analyzing

// Analyze these pieces of code before executing them. What will be the outputs ?

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // final array is: ["bread", "carrot", "potato", "chicken", "apple", "orange"]




const country = "USA";
console.log([...country]); // ["U", "S", "A"]



let newArray = [...[,,]]; // - [,,] creates an array with 2 empty slots (not undefined, just holes).
// When spread, these holes become undefined values.

console.log(newArray); // [undefined, undefined]

// Exercise 4 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message. 

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// Using the filter() method, create a new array, containing only the Full Stack Residents.

const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);


// Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const lastNamesOfResidents = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);

console.log(lastNamesOfResidents);


//  Exercise 5 : Star Wars

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Using the filter() method, create a new array, containing the students that passed the course.

const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

students.filter(student => student.isPassed).forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });

