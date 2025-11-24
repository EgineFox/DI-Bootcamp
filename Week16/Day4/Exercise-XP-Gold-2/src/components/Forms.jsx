import React, { useState } from 'react'

export default function Forms() {
    /*const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState(''); */

    const [ formData, setFormData ] = useState({
        Title: '',
        Author: '',
        Genre: '',
        YearPublished: ''
    })
    const [message, setMessage] = useState('');

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};


    const sendData = (e) => {
        e.preventDefault();
        setMessage('Data sent!');

       /* const data = [
            { key: "Title", value: title },
            { key: "Author", value: author },
            { key: "Genre", value: genre },
            { key: "Year", value: year }
        ]; */

        console.log(formData);
    }



    return (
        <div className='main'>
            <form className='forms' onSubmit={sendData}>
                <h1>New Book</h1> <br />
                <h3>{message}</h3>
                <label htmlFor="title-input">Title</label>
                <input type="text" 
                id='title-input'
                name='Title' 
                value={formData.Title} 
                onChange={handleChange} /> <br />

                <label htmlFor="author-input">Author</label>
                <input type="text" 
                id='author-input'
                name='Author'
                value={formData.Author} 
                onChange={handleChange} /> <br />

                <label htmlFor="genre-input">Genre</label>
                <input type="text" 
                id='genre-input' 
                name='Genre'
                value={formData.Genre} 
                onChange={handleChange} /> <br />

                <label htmlFor="year-input">Year Published</label>
                <input type="number" 
                id='year-input' 
                name="YearPublished"
                value={formData.YearPublished} 
                onChange={handleChange} /> <br />

                <button type='submit' >Submit</button>

            </form>

        </div>
    )
}
