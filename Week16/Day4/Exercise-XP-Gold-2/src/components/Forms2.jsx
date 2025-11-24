import React, { useState } from 'react'

export default function Forms2() {


    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        EmailAddress: ''
    })
    const [message, setMessage] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const sendData = (e) => {
        e.preventDefault();
        const error = validateForm();
        if (error) {
            setMessage(error);
        } else {
            setSubmitted(true);
        }
    }

    const validateForm = () => {
        if (!formData.FirstName || !formData.LastName) {
            return 'Name fields can not be empty';
        }
        if (!/^\d+$/.test(formData.PhoneNumber)) {
            return 'Phone must contain only digits';
        }
        if (!/\S+@\S+\.\S+/.test(formData.EmailAddress)) {
            return 'Invalid email format';
        }
        return null;
    };

    const reset = (e) => {
        e.preventDefault();
        setFormData({
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            EmailAddress: ''
        });
        setSubmitted(false);

    }

    return (
        <div className='main'>
            {
                submitted ? (
                    <div className="user-data">
                        <h1>Submitted Data</h1>
                        <p><strong>First Name:</strong> {formData.FirstName}</p>
                        <p><strong>Last Name:</strong> {formData.LastName}</p>
                        <p><strong>Phone Number:</strong> {formData.PhoneNumber}</p>
                        <p><strong>Email Address:</strong> {formData.EmailAddress}</p>
                        <button onClick={reset}>RESET</button>
                    </div>

                ) : (


                    <form className='forms2' onSubmit={sendData}>
                        <h1>Wellcome!</h1> <br />
                        <h3>{message}</h3>
                        <h3>Please provide your information below.</h3>
                        <input type="text"
                            id='firstName'
                            name='FirstName'
                            placeholder='First Name'
                            value={formData.FirstName}
                            onChange={handleChange} /> <br />

                        <input type="text"
                            id='lastName'
                            name='LastName'
                            placeholder='Last Name'
                            value={formData.LastName}
                            onChange={handleChange} /> <br />

                        <input type='tel'
                            id='telephone'
                            name='PhoneNumber'
                            placeholder='Phone Number'
                            value={formData.PhoneNumber}
                            onChange={handleChange} /> <br />

                        <input type="email"
                            id='email'
                            name="EmailAddress"
                            placeholder='Email Address'
                            value={formData.EmailAddress}
                            onChange={handleChange} /> <br />

                        <button type='submit' >Submit</button>

                    </form>
                )}
        </div>
    );
}
