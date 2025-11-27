import React, {useContext} from 'react'
import  {CounterContext} from '../App'

export default function CounterDisplay() {
        const { title, count} = useContext(CounterContext);
  return (
    <h3>{title}: {count}</h3>
  )
}
