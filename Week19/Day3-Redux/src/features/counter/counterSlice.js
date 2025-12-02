import  { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,//: {count: 0}
    reducers: {
        increment: (state) => {
            //return { ...state, state.count +1};
            state.count++;
            },
        decrement: (state) => {
            state.count--;
            },
        reset: (state) => {
                state.count = 0;
            },
        addByVal: (state,action) => {
            console.log(action);
            state.count+=Number(action.payload);
          
        } ,
        addByPripare: {
            reducer(state, action) {
             state.count += action.payload;
            },
            prepare(a, b) {
                return {payload: a + b}
            }
        }
       
    },
  //  extraReducers(builder) {}
})

export const {increment, decrement, reset, addByVal, addByPripare} = counterSlice.actions;
export default counterSlice.reducer
