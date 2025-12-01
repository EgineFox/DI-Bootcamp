import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, inputIncrement } from '../redux/actions';

export default function Counter() {
    const count = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();
    const inputRef = useRef();
    return (
        <>
            <h2>Counter</h2>
            <h3>Count = {count}</h3>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>
                <input type="number" ref={inputRef} />
                <button onClick={() => dispatch(inputIncrement(inputRef.current.value))}> + input value</button>
            </div>
        </>
    )
}
