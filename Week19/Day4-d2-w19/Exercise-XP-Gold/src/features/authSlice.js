import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    users: [],
    userStatus: "",
};

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        registerUser(state, action) {
           const { email, password } = action.payload;

           const newUser = { email: email,  password: password };

           state.users.push(newUser);
           state.userStatus = "register";
        },
        loginUser(state, action) {
            const { email, password } = action.payload;
            const user = { email, password};
            const currentUser = state.users.find(u => u.email === user.email );
            if (!currentUser) {
                state.userStatus = "user not found"
            } else if(currentUser.password !== user.password) {
                state.userStatus = "password incorrect"
            } else {
                state.userStatus = "logged in"
            }; 
            console.log(state.userStatus);
                      
        },
        logoutUser(state) {
            state.userStatus = 'logged out';
            console.log(state.userStatus);
            
        }
    }
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;