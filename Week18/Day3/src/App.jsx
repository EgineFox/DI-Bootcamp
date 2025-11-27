import Counter from "./components/Counter"
import React, { useState, createContext, useRef } from 'react';


export const CounterContext = createContext();


function App() {
     
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 ref={myRef}>CreateContext + useContext / useRef / useReducer </h1>
      <button onClick={handlerClick}>Click</button>
      <CounterContext value={{ header:'Counter Game', title:'Count', count:count,  setCount:setCount
}} >
        <Counter />
      </ CounterContext >
    </>
  )
}

export default App
