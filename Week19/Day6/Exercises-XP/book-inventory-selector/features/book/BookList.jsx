import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectBooks, selectDystopianBooks, selectHorrorBooks, selectPhilosophicalBooks, selectRomanceBooks, selectScienceFictionBooks } from './bookSlice'

export default function BookList() {
    const [filter, setFilter] = useState('all');
    const allBooks = useSelector(selectBooks);
    const dystopianBooks = useSelector(selectDystopianBooks);
    const horrorBooks = useSelector(selectHorrorBooks);
    const philosophicalBooks = useSelector(selectPhilosophicalBooks);
    const romanceBooks = useSelector(selectRomanceBooks);
    const sciFiBooks = useSelector(selectScienceFictionBooks);

    let booksToShow = allBooks;
    if (filter === 'dystopian') booksToShow = dystopianBooks;
    if (filter === 'horror') booksToShow = horrorBooks;
    if (filter === 'philosophical') booksToShow = philosophicalBooks;
    if (filter === 'romance') booksToShow = romanceBooks;
    if (filter === 'sciFi') booksToShow = sciFiBooks;



    return (
        <div>
            <h1>BookList Component</h1>
            <div style={{ marginBottom: '1rem' }}>
                <button onClick={() => setFilter('all')}>All books</button>
                <button onClick={() => setFilter('dystopian')}>Dystopian</button>
                <button onClick={() => setFilter('horror')}>Horror</button>
                <button onClick={() => setFilter('philosophical')}>Philosophical</button>
                <button onClick={() => setFilter('romance')}>Romance</button>
                <button onClick={() => setFilter('sciFi')}>Science Fiction</button>
            </div>

            <h2>List of books ({filter})</h2>
            <ul>
                {booksToShow.map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> — {book.author} ({book.genre})
                    </li>
                ))}
            </ul>




        </div>
    )
}
