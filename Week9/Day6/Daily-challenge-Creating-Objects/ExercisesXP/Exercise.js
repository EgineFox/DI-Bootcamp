//  Exercise 1 : Location
// Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

// In the string below we have destructuring. This extracts: lat = 49.2827 & lng = -123.1207
const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// Console Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info
function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
}; 

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Exercise 3: User & id
const users = { user1: 18273, 
                user2: 92833, 
                user3: 90315
             };

// 1.Using methods taught in class, turn the users object into an array
const usersArray = Object.entries(users);

console.log(usersArray);

//2. Modify the outcome of part 1, by multipling the user’s ID by 2.
const usersAr = usersArray.map(([key, value]) => [key, value * 2]);
console.log(usersAr);

// Exercise 4 : Person class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
// output is: object 
console.log(typeof member);

// Exercise 5 : Dog class
class Dog {
  constructor(name) {
    this.name = name;
  }
};

// Analyze the options below. Which constructor will successfully extend the Dog class?

// Variant 2 is right way to extend the Dog class
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

const peppi = new Labrador ('Peppi', 20);
console.log(peppi);

// Exercise 6 : Challenges
// 1.
[2] === [2] // false. Even though both arrays contain the same value, they are different objects in memory.

{} === {} // false. These are two separate object literals, each occupying a different spot in memory.

//2.
const object1 = { number: 5 };       // object1 is created with number = 5
const object2 = object1;             // object2 references the same object as object1
const object3 = object2;             // object3 also references the same object
const object4 = { number: 5 };       // object4 is a completely new object with its own number = 5

object1.number = 4;                  // modifies the shared object referenced by object1, object2, and object3

console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …

class Animal {
    constructor (name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
};

class Mammal extends Animal {
    sound(typeSound) {
       return `${typeSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
};

const farmerCow = new Mammal ('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Mooo'));

