// 1 loop:

let char = ' *';
for (let a = 1; a <= 6; a++) {
    console.log(char.repeat(a));
};

// 2 nested for loops 

for (let numRaw = 1; numRaw <=6; numRaw++){
        for (let numColumn = 1;numColumn <=6; numColumn++ ){
        if (numRaw == numColumn) {
            console.log(' *'.repeat(numColumn));
        }
    }
}
