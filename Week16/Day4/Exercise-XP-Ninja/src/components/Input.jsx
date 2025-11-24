import React, { useState } from 'react'

export default function Input({labels, input_type, input_id}) {
    const [message, setMessage] = useState('');
    const [value, setValue] = useState("");

    const validate = (val) => {
        if (!val) {
            return `${labels} cannot be empty`
        }
        if (input_type === "tel") {
            const phoneRegex = /^\d{7,}$/;
            return phoneRegex.test(val) ? "" : "Invalid phone number";
        }
        if (input_type === "email") {
            const emailRegex = /^\S+@\S+\.\S+$/;
            return emailRegex.test(val) ? "" : "Invalid email address";
        }

        return "";

    };
    const handleChange = (e) => {
        const val = e.target.value;
        setValue(val);
        setMessage(validate(val));
    };

    return (

        <div>
            <label htmlFor={input_id}>{labels}</label>
            <input
                type={input_type}
                id={input_id}
                value={value}
                onChange={handleChange}
            />
            {message && <h3 style={{ color: "red" }}>{message}</h3>}
        </div>
    )
}
