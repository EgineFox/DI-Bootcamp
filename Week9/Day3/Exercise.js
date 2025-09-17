/* let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]

let calories = party.reduce((sum, item ) => {
    return item.desert != 'Apple Pie' ? sum + item.calories : sum; }, 0
);
console.log(calories);  

const numbers = [10, 11, 12, 15, 20];

numbers.forEach((number, i) => {
  if (number % 2 === 0) {
    console.log(number);
  }
}); */


const words = ["wow","hey","bye"];
console.log(words.some(value => value[0] === 'h'));

const words2 = ["hello","hey","hola"];
console.log(words2.every(value => value[0] === 'h'));