// 1 Using a DOM property, retrieve the h1 and console.log it.
console.log(document.getElementsByTagName('h1'));

// 2 Using DOM methods, remove the last paragraph in the <article> tag.

const article = document.querySelector('article');
const paragraphs = article.getElementsByTagName('p');
const lastParagraph = paragraphs[paragraphs.length - 1];

if (lastParagraph) {
  console.log(lastParagraph); // only for checking action
  article.removeChild(lastParagraph);
}

// 3 Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const heading2 = document.querySelector('h2');
heading2.addEventListener ('click', ()=> {
  heading2.style.backgroundColor = 'red';
  console.log(heading2); // only for checking action
});

// 4 Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const heading3 = document.querySelector('h3');
heading3.addEventListener('click', ()=> {
  heading3.style.display = 'none';
  console.log(heading3); // only for checking action
});

// 5 Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const boldButton = document.createElement('button');
boldButton.textContent = 'Make Paragraphs Bold';

// Add click event to the button
boldButton.addEventListener('click', ()=> {
      const paragraphs = document.querySelectorAll('p');
      paragraphs.forEach(p => {
        p.style.fontWeight = 'bold';
        console.log(`Task: Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold - is done `); // only for checking action
      });
    });

// Append the button to the body
document.body.appendChild(boldButton);

// 6 BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.

function getRandomInt() {
    return Math.floor(Math.random() * 101);
}

const heading1 = document.querySelector('h1');
heading1.addEventListener('mouseover', ()=> {
    let rn = getRandomInt();
    heading1.style.fontSize = rn + 'px';
    console.log('Bonus: it\'s work ');// only for checking action
});