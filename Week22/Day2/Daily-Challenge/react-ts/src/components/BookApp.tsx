import { useState } from 'react';
import {List} from './List'

type Book = {
  id: number,     
  title: string,   
  author: string,  
}

function BookApp() {

    const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'Clean Code', author: 'Robert Martin' },
    { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
    { id: 3, title: 'You Don\'t Know JS', author: 'Kyle Simpson' },
  ]);

    
    const addBook = () => {
        const newBook: Book = {
      id: books.length + 1,
      title: `New Book ${books.length + 1}`,
      author: `Author ${books.length + 1}`,
    };

          
        setBooks([...books, newBook]);
    };

    return (
        <div>
      <h1>Book List</h1>
      
      <button onClick={addBook}>Add Book</button>
      
      <List
        items={books}  
                renderItem={(book) => (
          <div>
            <strong>{book.title}</strong>
            <span> by {book.author}</span>
          </div>
        )}
      />
    </div>
  );
}

export default BookApp;