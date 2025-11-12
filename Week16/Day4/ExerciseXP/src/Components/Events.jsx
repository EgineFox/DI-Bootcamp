import React, { useState } from "react";

const Events = () => {
    const [inputValue, setInputValue] = useState('');

    const clickMe = () => {
        alert('I was clicked');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            alert(`The Enter key was pressed, your input is: ${inputValue}`);
            
        }
    };

    const [ isToggleOn , setIsToggleOn] = useState(true);
    const toggleButton = () => {
        setIsToggleOn(!isToggleOn);
    }


    return (
        <>
            <button onClick={clickMe}>Click Me</button>
            <br />
            <br />
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown} 
                placeholder="Press the ENTER key!"
            />
            <br />
            <br />
            <button onClick={toggleButton}>{isToggleOn? 'ON' : 'OFF'}</button>
        </>
    );
};

export default Events;