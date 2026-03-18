/* Exercise 1 : Checking the BMI
Instructions
Hint:
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

Create two objects, each object should hold a person’s details. Here are the details:
FullName
Mass
Height

Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

Outside of the objects, create a JS function that compares the BMI of both objects.

Display the name of the person who has the largest BMI. */
let person1 = {
    FullName: "Sophia", 
    Mass: 37,
    Height: 1.3,
    getBMI() {
        return this.Mass/(this.Height**2)
    } 
};
let person2 = {
    FullName: "Ekaterina",
    Mass: 77,
    Height: 1.7,
    getBMI() {
        return this.Mass/(this.Height**2)
    } 
};

const hiBMI = (obj1, obj2) => {
   console.log( obj1.getBMI() > obj2.getBMI() ? `${obj1.FullName} have higher BMI` : `${obj2.FullName} have higher BMI`);
}

hiBMI(person1, person2);

/*Exercise 2 : Grade Average
Instructions
Hint:
- This Exercise is trickier then the others. You have to think about its structure before you start coding.
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

Create a function called findAvg(gradesList) that takes an argument called gradesList.

Your function must calculate and console.log the average.

If the average is above 65 let the user know they passed

If the average is below 65 let the user know they failed and must repeat the course.
Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
Hint One function must call the other.*/

let gradesList = [70, 100, 56, 30];
//1
const findAvg = (gradesList) => {
    let average = (gradesList.reduce((acc, v) => acc+v, 0))/gradesList.length;
    console.log("average is:" , average);
    if (average > 65) {
        console.log('You are passed');
    } else {
        console.log('You are failed and must repeat the course');
    }

}
findAvg(gradesList);

//2
const averageIs = (gradesList) => {
    let average = (gradesList.reduce((acc, v) => acc+v, 0))/gradesList.length;
    console.log("average is:" , average);
    return average;
}

const howIStudy = (gradesList) => {
    let res = averageIs(gradesList);
    if (res > 65) {
        console.log('You are passed');
    } else {
        console.log('You are failed and must repeat the course');
    }
}

howIStudy(gradesList);