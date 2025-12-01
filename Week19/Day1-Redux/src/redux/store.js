//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./reducers";

const store = configureStore({
    reducer: {
        counterReducer,
    },
});

export default store;
