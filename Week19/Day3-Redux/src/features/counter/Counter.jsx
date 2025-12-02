import React, { useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, addByVal, addByPripare } from "./counterSlice";


export default function Counter() {
    const count = useSelector(state => state.counterReducer.count);
    const dispatch = useDispatch();
    const numRef = useRef();

   /* const increment5Sec = () => {
        setTimeout(()=> {
            dispatch(increment());
        }, 5*1000);
        };
    */
    return (
        <>

            <h2>
                Counter
            </h2>
            <h3>Count: {count}</h3>

            <button onClick={()=> dispatch(increment())}>
                +
            </button>
            <button onClick={()=> dispatch(decrement())}>
                -
            </button>
            <button onClick={()=> dispatch(reset())}>
               Reset
            </button>
            <div>
                <input type="number" ref={numRef} />
                <button onClick={()=> dispatch(addByVal(numRef.current.value))}>
                    Add by Input Value
                </button>
                <button onClick={()=> dispatch(addByPripare(3,5))}>
                    Add by Input Prepare
                </button>
            </div>
        </>
    )
}
