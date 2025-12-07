import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
    users: [],
    status: "",
};

export const fetchUsers = createAsyncThunk('users/fetch', async () =>{
    const res = await fetch(USERS_URL);
    const data = await res.json()
    return data
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.status = "failed";
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = "";
            state.users = action.payload;
        });
        
    }
})

export default userSlice.reducer;