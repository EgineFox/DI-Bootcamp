import { useRef } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { increment, decrement, incrementByVal } from "../redux/actions";
import {
  ACTION_DECREMENT,
  ACTION_BY_VAL,
  ACTION_INCREMENT,
} from "../redux/reducers";

const Counter = (props) => {
  const count = useSelector((state) => state.counterReducer.count);
  // const dispatch = useDispatch();
  const inputRef = useRef();
  console.log(props);

  return (
    <>
      <h2>Counter</h2>
      <h3>Count = {count}</h3>
      <button
        onClick={() =>
          props.dispatch({
            type: ACTION_INCREMENT,
          })
        }
      >
        +
      </button>
      <button onClick={() => props.dispatch(decrement())}> - </button>
      <div>
        <input ref={inputRef} type='number' />
        <button
          onClick={() => props.dispatch(incrementByVal(inputRef.current.value))}
        >
          + input value
        </button>
      </div>
    </>
  );
};

export default connect()(Counter);