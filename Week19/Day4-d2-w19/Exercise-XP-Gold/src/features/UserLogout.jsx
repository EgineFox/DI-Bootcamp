import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from './authSlice';

export default function UserLogout() {
    const status = useSelector( state => state.auth.userStatus);
    const dispatch = useDispatch();

  return (
    <div>
     <h1>User Logout</h1>  
      <p>Status: {status}</p>  
     <button onClick={() =>dispatch(logoutUser())}>Log Out</button>

    </div>
  )
}
