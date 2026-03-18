const numbers = [5,0,9,1,7,4,2,6,3,8];
const string1 = numbers.toString();
console.log(string1);
const string2 = numbers.join('+');
console.log(string2);


for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
    
    if (numbers[j] < numbers[j + 1]) {
      let temp = numbers[j];        // запоминаем левый
      numbers[j] = numbers[j + 1]; // на его место — правый
      numbers[j + 1] = temp;        // на место правого — сохранённый левый
      
      //console.log(`Шаг i=${i}, j=${j}:`, [...numbers]);
    }
  }
}

console.log("Результат:", numbers);
