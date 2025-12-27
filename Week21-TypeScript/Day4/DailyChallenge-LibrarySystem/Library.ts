interface Book {
    title: string,
    author: string,
    isbn: string,
    publishedYear: number,
    genre?: string,
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    };

    public getBookDetails(isbn: string): string {
        const findedBook = this.books.find(b => isbn === b.isbn);
        if (findedBook) {
            let details = `Title: ${findedBook.title},
                        Author: ${findedBook.author},
                        ISBN: ${findedBook.isbn},
                        Puplished year: ${findedBook.publishedYear}`;

            if (findedBook.genre) {
                details += `\nGenre: ${findedBook.genre}`;
            } 
                return details;
            }
            return 'Book not found';
        }
    protected getBooks(): Book[] {
        return this.books;
    }
}


class DigitalLibrary extends Library {
    readonly website: string;
    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        return this.getBooks().map(book => book.title);
    }
}

// create instance of DigitalLibrary
const digitalLib = new DigitalLibrary('http://myLibrary.com');

digitalLib.addBook({
   title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    publishedYear: 1949,
    genre: "Dystopian" 
});

digitalLib.addBook({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "978-0547928227",
    publishedYear: 1937,
    genre: "Fantasy"
});

digitalLib.addBook({
    title: "Clean Code",
    author: "Robert Martin",
    isbn: "978-0132350884",
    publishedYear: 2008
});

console.log("Book Details:");
console.log(digitalLib.getBookDetails("978-0451524935"));
console.log("\nAll Books:");
console.log(digitalLib.listBooks());