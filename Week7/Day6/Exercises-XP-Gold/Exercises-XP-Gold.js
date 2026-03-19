//Exercise 1 : is_Blank
const isBlank = (stringToCheck) => {
    return stringToCheck.length === 0 ;
}

console.log(isBlank(''));
console.log(isBlank('abc'));

//Exercise 2 : Abbrev_name
const abbrevName = (fname) => {
    let nameAr = fname.split(" ");
    let firstName = nameAr[0];
    let lastName = nameAr[1][0];
    return firstName + ' '+ lastName+'.';
}
console.log(abbrevName("Robin Singh"));

/* const abbrevName = (fname) => {
    const [first, last] = fname.split(" ");
    return `${first} ${last[0]}.`;
} */

// Exercise 3 : SwapCase
const SwapCase = (string) => {
    let stringAr = string.split('');
    for ( let i =0 ; i < stringAr.length; i++) {
        stringAr[i] === stringAr[i].toUpperCase() ? stringAr[i] = stringAr[i].toLowerCase() : stringAr[i] = stringAr[i].toUpperCase(); 
    }
    return stringAr.join('');
}

SwapCase('The Quick Brown Fox');

/* const SwapCase = (string) => {
    return string.split('').map(char => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
} 
    
const SwapCase = (string) => string.split('').map(char =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
).join('');
*/

//Exercise 4 : Omnipresent value
const isOmnipresent = ( arr, x) => {
    let result = [];
    for ( let i = 0; i < arr.length; i++) {
        arr[i].includes(x) ? result[i] = true : result[i] = false;
    }
    if (result.includes(false)) {
        return false;
    }
    return true;
}

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1);
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6);

/*const isOmnipresent = (arr, x) => {
    return arr.every(subArr => subArr.includes(x));
} */

//Exercise 5 : Red table in HTML
