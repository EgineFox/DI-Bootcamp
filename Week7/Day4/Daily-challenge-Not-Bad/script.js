let sentence = 'I learn JS first time, it is not so bad';
let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad');

if (wordNot < wordBad) {
let newSentence = sentence.slice(0, wordNot) + 'good' + sentence.slice(wordBad + 3);
console.log(newSentence);
}
else {
console.log(sentence);    
}