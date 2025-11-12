import React, { useState, useEffect } from "react";

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");

    useEffect(() => {
        alert("useEffect reached");
    }, []);

    const changeColor = () => {
        setFavoriteColor("blue");
    };

    return (
        <>
            <h1>{favoriteColor}</h1>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
};

export default Color;