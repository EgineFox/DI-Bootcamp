let wordsStr = prompt('Enter some words, separated by commas', 'one,two,three');

const wordsInStar = (wordsStr) => {
    let wordsArr = wordsStr.split(',');
    console.log(wordsArr);
    
    let lengthlyWord = '';
    for (let i = 0; i < wordsArr.length; i++) {
        wordsArr[i] = wordsArr[i].trim();
        if (lengthlyWord.length < wordsArr[i].length ) {
            lengthlyWord = wordsArr[i];
        }
    }
    
    let astrix = '*';
    let firstLastStr = astrix.repeat(lengthlyWord.length + 4);
    let leftAstr = '* ';
    let rightAstr = ' *';
    let space = ' ';
    console.log(firstLastStr);
    for  (let i = 0; i < wordsArr.length; i++) {
        if (lengthlyWord.length === wordsArr[i].length) {
            console.log(leftAstr + wordsArr[i] + rightAstr );
        } else {
            console.log(leftAstr + wordsArr[i]+ space.repeat(lengthlyWord.length - wordsArr[i].length)+ rightAstr );
        }
    }
    console.log(firstLastStr);
}

wordsInStar(wordsStr);