import React, { useState } from "react";
import Garage from './Garage'

function Car ({ carinfo }) {

   const [color, setColor] = useState('red');

   return (
      <>
      <h1> This car is {carinfo.name} {carinfo.model}</h1>
      <h3> This car is {color} {carinfo.model}</h3>
      <br />
      < Garage size='small' />
      <br />
      </>
   )
}

export default Car;
