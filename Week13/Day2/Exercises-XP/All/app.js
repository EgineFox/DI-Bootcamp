import { persons } from './data.js';



// Write a function that calculates and prints the average age of all the persons in the array.

const avAge = persons => {
    if (persons.length === 0) {
        console.log('No persons in the array.');
        return;
    }

    const totalAge = persons.reduce((sum, person) => sum + person.age, 0); 
    const average = totalAge/persons.length;

    console.log(`Average age is ${average.toFixed(2)} years.`);

}

avAge(persons);