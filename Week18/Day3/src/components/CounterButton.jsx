import React, {useContext} from 'react'
import  {CounterContext} from '../App'

export default function CounterButton() {
    const {setCount} = useContext(CounterContext);
  return (
    <button onClick={()=> setCount((prev) => prev+1)}> + </button>
  )
}
