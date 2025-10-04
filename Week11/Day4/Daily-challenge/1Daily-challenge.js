/*
Instructions
1st daily challenge
Create two functions. Each function should return a promise.
*/
function isString(array){
  for (let i=0; i< array.length; i++){
    if (typeof array[i] != 'string') {
        return false;
    } 
 }  return true;
} 

/* The first function called makeAllCaps(), takes an array of words as an argument
If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
else, reject the promise with a reason. */


const makeAllCaps = (array) => new Promise ((resolve, reject) =>{
    if (isString(array)) {
        const uppercased = array.map(str => str.toUpperCase());
        resolve(uppercased); 
    } else {
        reject('Error: Not all elements are strings');
    }
})

/*
The second function called sortWords(), takes an array of words uppercased as an argument
If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
else, reject the promise with a reason.
*/ 

const sortWords = (array) => new Promise((resolve, reject) => {
    if (array.length > 4) {
        resolve(array.sort());
    } else {
        reject('Error: Length of array so small...');
    }
});


// Test:

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))