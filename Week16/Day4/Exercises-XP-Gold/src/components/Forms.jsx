import React, { useState } from 'react';


export default function Forms() {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [errormessage, setErrormessage] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleAge = (e) => {
        const value = e.target.value;
        if (value != '' && isNaN(value)) {
            setErrormessage('Age must be a numeric value!');

        } else {
            setErrormessage('');
            setAge(value);
        }
    };


    let header = null;
    if (username && age) {
        header = <h1>Hello {username}! Your age is {age}</h1>;
    }

    const mySubmitHandler = (e) => {
        e.preventDefault();
        alert(`You are submitting ${username}, age ${age}`);
    };

    const [textareaContent , setTextareaContent] = useState('The content of textarea goes in the value attribute')

    const handleChange = (e) => {
        setTextareaContent(e.target.value);
    }

    const [car, setCar] = useState('Volvo');
    const handleCar = (e) =>{
        setCar(e.target.value);
    }
    return (
        <div className='forms'>
            {header}
            <form onSubmit={mySubmitHandler}>
                <h1>Hello {username}</h1> <br />

                <label htmlFor="input-name">Enter your name:</label> <br />
                <input type="text" id='input-name' onChange={handleUsername} value={username} name='input-name' /> <br />
                <label htmlFor="input-age">Enter your age:</label> <br />
                <input type="text" id='input-age' onChange={handleAge} value={age} name='input-age' /> <br />
                {errormessage && <p style={{ color: 'red' }}>{errormessage}</p>}
                <textarea name="textarea-test" id="" rows={5} value={textareaContent} onChange={handleChange}></textarea> <br />
                <select name="select" id="" value={car} onChange={handleCar}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
