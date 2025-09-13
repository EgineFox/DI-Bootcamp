function sayHi() {
  alert("Hello World");
}

setTimeout(sayHi, 2000);

function newP() {
  let newParagraph = document.createElement('p');
  newParagraph.textContent = 'Hello World';
  document.getElementById('container').appendChild(newParagraph);

}

setTimeout(newP, 2000);

const container = document.getElementById('container');
const stopButton = document.getElementById('clear');

// Function to add a paragraph
    function addParagraph() {
      const p = document.createElement('p');
      p.textContent = 'Hello World';
      container.appendChild(p);

      // Stop interval if there are 5 paragraphs
      if (container.querySelectorAll('p').length >= 5) {
        clearInterval(intervalId);
      }
    }

    // Start interval
    const intervalId = setInterval(addParagraph, 2000);

    // Stop interval on button click
    stopButton.addEventListener('click', () => {
      clearInterval(intervalId);
    });
