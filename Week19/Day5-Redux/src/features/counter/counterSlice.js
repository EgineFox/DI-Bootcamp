import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const delayIncrementAsync = createAsyncThunk("counter/delay", () => {
    return new Promise( (res , rej) => {
        setTimeout(()=> {
            res(1)
        }, 5*1000)
    })
})

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
  extraReducers(builder) {
    builder.addCase(delayIncrementAsync.pending, (state, action) => {
        // обработка pending
        console.log("pending=>", action);
        
    });
    builder.addCase(delayIncrementAsync.fulfilled, (state, action) => {
        // обработка fulfilled
        console.log("fulfilled=>", action);
    });
    builder.addCase(delayIncrementAsync.rejected, (state, action) => {
        // обработка rejected
        console.log("rejected=>", action);
    });
}
})

export const {increment, decrement, reset, addByVal, addByPripare} = counterSlice.actions;
export default counterSlice.reducer
