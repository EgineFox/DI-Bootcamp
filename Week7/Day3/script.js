/*
// Exercise 1
let addressNumber = 18
let addressStreet = "Sderot Kugel"
let country = "Israel"
let globalAddress = "Address of user is" + addressNumber + addressStreet +"in "+ country 
alert(globalAddress)

// Exercise 2
let MyBDYear = 1989;
let FutureYear = 2026;
let MyAge = FutureYear - MyBDYear;
console.log(`I will be ${MyAge} in ${FutureYear}`);


//Exercise 3
let Pets = ['cat','dog','fish','rabbit','cow']
console.log(Pets[1])
Pets.push('horse')
console.log(Pets)
Pets.splice(3,1)
console.log(Pets)
console.log(Pets.length)


//Objects - Exercise 1 
let Login = {
    username: value,
    password: value,
};
let database = [Login];
const newsfeed = [
  {
    username: "alex_dev",
    timeline: "Just finished building my first React app!"
  },
  {
    username: "sara_writer",
    timeline: "Published a new short story today—feeling proud!"
  },
  {
    username: "mike_traveler",
    timeline: "Exploring the streets of Tokyo. What a vibe!"
  }
];

console.log("Database:", database);
console.log("Newsfeed:", newsfeed);

//Objects - Exercise 2
let age = prompt('Please your age', 18);
let message
if (age === 18) {
        message ="Congratulations on your first year of driving. Enjoy the ride!") 
    } else if (age > 18) {
        message ="Powering On. Enjoy the ride!"
    } else {
        message = "Sorry, you are too young to drive this car."
        };
// alert(message); 

//Loops - Exercise 1
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    let type = "even";
    console.log(`${i} is ${type}`);
  } else {
    let type = "odd";
    console.log(`${i} is ${type}`);
  }
}
*/
//Loops - Exercise 2
const names = ["Alice", "Bob", "Charlie", 99, "David"];

for (let i = 0; i < names.length; i++) {
  const item = names[i];

  if (typeof item !== "string") {
    continue; // Exit loop on first non-string
  }

  console.log(item);
}


