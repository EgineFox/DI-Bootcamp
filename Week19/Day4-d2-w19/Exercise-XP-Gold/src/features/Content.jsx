import React from 'react';
import UserLogin from './UserLogin';
import UserLogout from './UserLogout';
import UserRegister from "./UserRegister"
import { useSelector } from "react-redux";

export default function Content() {
    const status = useSelector(state => state.auth.userStatus);

    let content;

    switch (status) {
        case "user not found":
            content = (
            <>
            <p>User not found. Please fill register form!</p>
            <UserRegister />
            </> );
            break;
        case "password incorrect":
            content = <p>Password incorrect. Type your password again</p>
            break;
        case "register":
            content = (
                <>
                    <p>Welcome! Please confirm you Authentication</p>
                    <UserLogin />
                </>
            );
            break;
        case "logged in":
            content = (
                <>
                    <p>Great! You are logged in!</p>
                    <UserLogout />
                </>
            );
            break;
        case "logged out" :
            content = (
                <>
                    <p>You are logged out!</p>
                    <UserLogin />
                </>
            );
            break;
        default:
            content = ( 
                <>
            <p>Please Login</p>
            <UserLogin /> 
                </>
                );
    }

    return (
        <div>
            <h1>Content</h1>
            {content}
        </div>
    );
}