import React from 'react'
import { useState , useEffect } from 'react'

export default function Clock() {
    const [currentDate, setCurrentDate ] = useState(new Date());

    const tick = () => {
        setCurrentDate(new Date());
    } 
useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () =>clearInterval(timerID);
}, [] );

  return (
    <div>
        <h1> It's {currentDate.toLocaleTimeString()} </h1>
    </div>
  )
}
