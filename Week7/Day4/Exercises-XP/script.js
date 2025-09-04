//  Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];

//Part I - Review about arrays
//1. Write code to remove “Greg” from the people array.
people.shift();
console.log(people);

//Write code to replace “James” to “Jason”.
people[2] = 'Jason';
console.log(people);

//Write code to add your name to the end of the people array.
people.push('Ekaterina');
console.log(people);


//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'));

//Write code to make a copy of the people array using the slice method.
let newPeople = people.slice(1,3);
console.log(newPeople);

//Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf('Foo')); //JavaScript returns -1 because "Foo" is not found in the people array. The indexOf() method searches the array for the specified value and returns its index if it's present. If it’s not present, it returns -1 to indicate “no match.”

//Create a variable called last which value is the last element of the array.
//Hint: What is the relationship between the index of the last element in the array and the length of the array?

a = people.length -1;
let last = people[a];
console.log(last); 

//Part II - Loops
//1.Using a loop, iterate through the people array and console.log each person.
for (let p=0; p <= a; p++)
{
    console.log(people[p]);
};

// 2.Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
//Hint: take a look at the break statement in the lesson.
for (let p=0; p <= a; p++)
{
    if (people[p] === 'Devon') {
        break;
    }
    console.log(people[p]);
};


//Exercise 2 : Your favorite colors
//1 Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
let colors = ['white', 'blue', 'brown', 'pink', 'black'];
for (let c = 0; c < colors.length; c++) {
    console.log(`My #${c + 1} choice is ${colors[c]}`);
}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
let suffixes = ["st", "nd", "rd", "th", "th"]; // Works for top 5
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

//Exercise 3 : Repeat the question
// Start an infinite loop that will continue until a valid number is entered
while (true) {
 // 1 Prompt the user for a number, with a default value of 13
  let userNumb = Number(prompt("Please enter random number", 13)); 
 //2 Check if the input is not a number
    if (isNaN(userNumb)) {   
    alert('It\'s not a number!'); 
    continue;
    }
 // 3 Check if the number is less than 10
    else if (userNumb < 10) {
    alert('We need a bigger number, try again'); 
    continue;
    }
 // 4 If the number is valid and 10 or greater
    else {
    alert('Wow, it\'s a perfect number!');
    break;
    } 
    }



    //Exercise 4 : Building Management
    const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.
//console.log(building.numberOfFloors)

//Console.log how many apartments are on the floors 1 and 3.
console.log(`On the 1\'st floor there are ${building.numberOfAptByFloor.firstFloor} apts and on the 3\'d floor there are ${building.numberOfAptByFloor.thirdFloor} apts`);

//Console.log the name of the second tenant and the number of rooms he has in his apartment.

const secondTenant = building.nameOfTenants[1];
const secondTenantKey = secondTenant.toLowerCase();
const rooms = building.numberOfRoomsAndRent[secondTenantKey][0];

console.log(`The 2nd tenant name is ${secondTenant}. ${secondTenant} has ${rooms} rooms in the apartment.`);

// Get the key for Sara's rent by converting her name to lowercase
let SaraRentKey = building.nameOfTenants[0].toLocaleLowerCase();

// Retrieve Sara's rent amount from the building data
let rentSara = building.numberOfRoomsAndRent[SaraRentKey][1];

// Get the key for David's rent by converting his name to lowercase
let DavidRentKey = building.nameOfTenants[2].toLocaleLowerCase();
// Retrieve David's rent amount from the building data
let rentDavid = building.numberOfRoomsAndRent[DavidRentKey][1];


// Calculate the total rent paid by Sara and David
let sumRent = rentSara + rentDavid;

// Get the key for Dan's rent by converting his name to lowercase
let DanRentKey = building.nameOfTenants[1].toLocaleLowerCase();
// Retrieve Dan's current rent amount
let rentDan = building.numberOfRoomsAndRent[DanRentKey][1];
if (sumRent > rentDan) {
  // Update Dan's rent to 1200
  rentDan = 1200;
  building.numberOfRoomsAndRent[DanRentKey][1] = rentDan;
  console.log(`Sum of rents David and Sara is ${sumRent}, Dan\'s rent now is ${rentDan}`);
  console.log(building);
}



//  Exercise 5 : Family
//Create an object called family with a few key value pairs.
 const Family = {
    numberOfMembers: 3,
    structureOfFamily: {
        Dad: "Artem",
        Mom: "Katya",
        Child: "Sofia",
        },
    ageAndBusyness:  {
        artem: [32, 'employed'],
        katya:  [32, 'employed, student'],
        sofia: [6, 'schoolchild'],
    },
  }

//Using a for in loop, console.log the keys of the object.
let keys = Object.keys(Family);
for (let k = 0; k < keys.length; k++) {
  console.log(keys[k]); ;
}

//Using a for in loop, console.log the values of the object.
for (let k = 0; k < keys.length; k++) {
  console.log(Family[keys[k]]); ;
}


// Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let sentence = "";
for (let key in details){
  sentence += key + " "+ details[key] + " ";
  
}
console.log(sentence.trim());


// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let firstChar = '';

// Use for...of to get actual values
for (let name of names) {
  firstChar += name[0];
}

// Convert to array, sort, and join
let nameOfSociety = firstChar.split('').sort().join('');

console.log(nameOfSociety);