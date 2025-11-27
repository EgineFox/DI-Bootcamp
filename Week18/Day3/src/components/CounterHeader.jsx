import React, {useContext} from 'react';
import  {CounterContext} from '../App'


export default function CounterHeader() {
    const {header} = useContext(CounterContext);
  return (
     <h2>{header}</h2>
  )
}
