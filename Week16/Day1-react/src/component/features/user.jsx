import React from "react";

export default function User({ name, email, username}) {
    return (
        <div style={{
            display: 'inline-block'
        }}>
            <h2>{name}</h2>
            <p> {email}</p>
            <h4>{username}</h4>
            <Button variant="outlined">Primary</Button>
        </div>

    )
}