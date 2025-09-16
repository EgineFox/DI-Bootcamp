let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};



// Arrow function to display fruits
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};


// Arrow function to clone and modify
const cloneGroceries = () => {
    // Pass by value (primitive type)
    let user = client;
    client = "Betty";
    console.log("User:", user); // Still "John" because strings are passed by value

    // Pass by reference (objects)
    let shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.paid = false;

    console.log("Shopping totalPrice:", shopping.totalPrice); // "35$"
    console.log("Groceries totalPrice:", groceries.totalPrice); // Also "35$"
    console.log("Groceries paid status:", groceries.other.paid); // false
};



// Invoke the functions
displayGroceries();
cloneGroceries();


