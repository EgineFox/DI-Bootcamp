import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from './authSlice';

export default function UserLogin() {
    const users = useSelector( state => state.auth.users);
    const  userNameRef = useRef();
    const  userPassRef = useRef();
    const dispatch = useDispatch();
  return (
    <div>
        <h1> User Register Form:</h1> 
        <input 
        type="email"
        placeholder="Email"
        ref = {userNameRef}
        /> <br />
        <input 
        type="password"
        placeholder="Password"
        ref = {userPassRef}
        /> <br />

        <button onClick={()=>dispatch(registerUser({name: userNameRef.current.value, password:userPassRef.current.value }))}>Submit</button>

    </div>
  )
}
