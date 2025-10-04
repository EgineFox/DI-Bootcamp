/*
Instructions
Improve the program below :

fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));

*/

const improve = async () => {
    try {
      const response = await fetch('https://www.swapi.tech/api/starships/9/');

      if (!response.ok) {
        throw new Error(`HTTP error!: ${response.status}`);
      }
      const objectStarWars = await response.json(); 
      console.log(objectStarWars.result) ; 
    }
    catch (error) {
        console.error('Error:', error);
    }
    
}

improve();