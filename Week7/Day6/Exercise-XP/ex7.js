// 1. Create an array of book objects
const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
    alreadyRead: false
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Nineteen_Eighty-Four_cover_Soviet_1984.jpg",
    alreadyRead: true
  }
];

// 2. Select the section where books will be displayed
const bookSection = document.querySelector(".listBooks");

// 3. Loop through each book and render it
allBooks.forEach(book => {
  // Create a container div for the book
  const bookDiv = document.createElement("div");

  // Create a paragraph for title and author
  const bookDetails = document.createElement("p");
  bookDetails.textContent = `${book.title} written by ${book.author}`;

  // Set text color to red if already read
  if (book.alreadyRead) {
    bookDetails.style.color = "red";
  }

  // Create an image element
  const bookImg = document.createElement("img");
  bookImg.src = book.image;
  bookImg.style.width = "100px";

  // Append elements to the book div
  bookDiv.appendChild(bookDetails);
  bookDiv.appendChild(bookImg);

  // Append the book div to the section
  bookSection.appendChild(bookDiv);
});
