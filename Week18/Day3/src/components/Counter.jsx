import React from 'react'
import CounterHeader from "./CounterHeader"
import CounterDisplay from "./CounterDisplay"
import CounterButton from "./CounterButton"

export default function Counter({header,title,count, setCount }) {
    return (
        <div>
            <CounterHeader header={header} />
            <CounterDisplay title = {title} count = {count} />
            <CounterButton setCount={setCount}/>


        </div>
    )
}
