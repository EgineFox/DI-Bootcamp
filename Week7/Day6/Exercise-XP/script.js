// Exercise 1 : Find the numbers divisible by 23 and divisor

function displayNumbersDivisible(divisor) {
    let sum = 0;
    for ( i=0; i<501; i++) {
        if (i%divisor == 0) {
            console.log(i);
            sum += i;
        }
    }
console.log(sum);
}

displayNumbersDivisible(45);


// Exercise 2 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

// Step 2: Create shopping list
const shoppingList = ["banana", "orange", "apple"];

// Step 3: Define myBill function
function myBill() {
    let total = 0;

    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];         // Add price to total
            stock[item] -= 1;              // Bonus: Decrease stock by 1
        }
    }
    return total;
}

// Step 4: Call the function
console.log("Total bill:", myBill());

//Log updated stock (for debugging)
console.log("Updated stock:", stock);


//Exercise 3 : What’s in my wallet ?

function changeEnough (itemPrice, amountOfChange) {
   const coinValues = [0.25, 0.10, 0.05, 0.01];
   // Calculate total change
  let totalChange = 0;
  for (let i=0; i<amountOfChange.length; i++) {
    totalChange += amountOfChange[i] * coinValues[i];
  }

  // Compare with item price
  return totalChange >= itemPrice;
};

console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5]));   // true


//Exercise 4 : Vacations Costs

// Calculates the total cost of hotel stay based on number of nights
function hotelCost(nights) {
  const costPerNight = 140;
   // Validate input: must be a positive number
  if (isNaN(nights) || nights <= 0) {
    return "Invalid number of nights.";
  }
  // Return total hotel cost
  return nights * costPerNight;
}

// Determines the cost of a plane ride based on destination
function planeRideCost(destination) {
  // Validate input: must be a non-empty string
  if (typeof destination !== "string" || destination.trim() === "") {
    return "Invalid destination.";
  }
  // Normalize input for comparison
  destination = destination.trim().toLowerCase();
  // Return price based on destination
  switch (destination) {
    case "london":
      return 183;
    case "paris":
      return 220;
    default:
      return 300;
  }
}

// Calculates the total cost of renting a car based on number of days
function rentalCarCost(days) {
  const costPerDay = 40;
  // Validate input: must be a positive number
  if (isNaN(days) || days <= 0) {
    return "Invalid number of rental days.";
  }
  // Calculate base cost
  let total = days * costPerDay;
  if (days > 10) {
    total *= 0.95; // Apply 5% discount
  }
  return total;
}

// Main function that gathers user input and calculates total vacation cost
function totalVacationCost() {
  let nights, destination, days;

   // Prompt user for number of hotel nights until valid input is given
  do {
    nights = parseInt(prompt("How many nights would you like to stay in the hotel?"));
  } while (isNaN(nights) || nights <= 0);

  // Ask for destination
  do {
    destination = prompt("What is your destination?");
  } while (typeof destination !== "string" || destination.trim() === "");

  // Ask for car rental days
  do {
    days = parseInt(prompt("How many days would you like to rent the car?"));
  } while (isNaN(days) || days <= 0);

  // Call helper functions to calculate individual costs
  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  // Display result
  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
  console.log(`Total vacation cost: $${car + hotel + plane}`);
}

totalVacationCost();



