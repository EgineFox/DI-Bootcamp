// Ex 1

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] % 3 === 0);
}

// Ex  2
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

let name = prompt('What\'s your name?', 'guest').toLowerCase();
console.log((name in guestList) ? `Hi! I'm ${name}, and I'm from ${guestList[name]}.` : "Hi! I'm a guest.");

// Ex 3
let age = [20,5,12,43,98,55];
//1
let total = age.reduce((acc, v) => acc + v);
console.log(total);

//2
let total2 = 0;
for (let a = 0; a < age.length; a++) {
    total2 += age[a];
}
console.log(total2);

// highest age in the array
let hAge = age[0];
for (index in age) {
    hAge > age[index] ? hAge : hAge = age[index];  
}
console.log(hAge);


//2
let hAge2 = age[0];
for (index in age) {
    if (age[index] > hAge2) {
        hAge2 = age[index];
    }
}
console.log(hAge2); // 98