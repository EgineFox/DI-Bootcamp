/* Exercise 1: Random Number
Instructions
Get a random number between 1 and 100.
Console.log all even numbers from 0 to the random number. */
const ex1 = () => {
        let randomNum = Math.floor(Math.random()*100)+1;
        for (let i=0; i<randomNum; i++) {
            if (i%2 === 0) {
                console.log(i);
            }
        }
}
 ex1();

 //Exercise 2: Capitalized letters
const capitalize = (str) => {
    let strNormilize = str.toLowerCase().trim()
    let str1=''; 
    let str2='';
    for (let i=0; i<strNormilize.length; i++) {
        if ( i%2 === 0){
            str1 += strNormilize[i].toUpperCase();
            str2 += strNormilize[i];
        } else {
            str1 += strNormilize[i];
            str2 += strNormilize[i].toUpperCase();
        }
    }
    let resArr = [str1, str2]
    console.log( resArr);
    return resArr;
    
} 

capitalize("abcdef");

//Exercise 3 : Is palindrome?

const isPalindrome = (word) => {
    let drow = '';
    for ( let i = (word.length-1); i >= 0; i--){
        drow += word[i];
    }
    return word === drow;
}

isPalindrome('madam');

//Exercise 4 : Biggest Number
const biggestNumberInArray = (arrayNumber) => {

     let biggestNum = arrayNumber.find(el => typeof el === 'number') ?? 0;
    for ( let i = 0; i < arrayNumber.length; i++ ) {
        if (typeof arrayNumber[i] !== 'number') continue;
        if (arrayNumber[i] > biggestNum) {
            biggestNum = arrayNumber[i];
        }
    }
    return biggestNum;
}

const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0

//Exercise 5: Unique Elements
const uniqueEl = (arr) => {
    return [...new Set(arr)];
}

//Exercise 6 : Calendar
/* const createCalendar = (year, month) => {

}

in html*/