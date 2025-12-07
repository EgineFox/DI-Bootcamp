import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import userReducer from "../features/Users/usersSlice"

const store = configureStore({
    reducer: {
        counterReducer,
        users: usersReducer,
    },
});

export default store;