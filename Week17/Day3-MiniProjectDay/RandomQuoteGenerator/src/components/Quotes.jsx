import React, {useEffect, useState} from 'react'
import QuotesDatabase from "../data/QuotesDatabase.js"

export default function Quotes() {
const [quote, setQuote] = useState('');
const [author, setAuthor] = useState('');


    const showRandomQuote = () => {
        let randomNum = Math.floor((Math.random() * (QuotesDatabase.length)));
        const choise = QuotesDatabase[randomNum];
        setQuote(choise.quote);
        setAuthor(choise.author);
        changeColor();
    }

    const changeColor = () => {
        const randomColor = getRandomColor();
        document.querySelector('html').style.backgroundColor = randomColor;
        document.getElementById('quote').style.color = randomColor;
        document.getElementById('autor').style.color = randomColor;
        document.querySelector('button').style.backgroundColor = randomColor;
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = "#";
        for (let i=0; i<6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useEffect(() => {
        showRandomQuote();
    }, []);


    return (
        <div className='quotebox' style={{borderRadius:'10px', background:'white', height: 'auto', width: 'auto', padding: '20px', textAlign : 'right'}}>
            <div className='text'>
                <h1 id='quote'style={{ textAlign : 'left'}}>"{quote}"</h1>
                <h5 id='autor' style={{ textAlign : 'right'}}>- {author} -</h5>
            </div>

            <button onClick={showRandomQuote} style={{borderRadius:'10px', height: 'auto', width: 'auto', padding: '20px', position: 'relative'}}>New quote</button>
        </div>
    )
}
