import React, { useState } from 'react'
import Form from './Components/Form';

function App() {
  const [ formdata, setFormData ] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    desdination: '',
    lactoseFree: false,
    nutsFree: false,
    vegan: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      firstName: formdata.firstName,
      lastName: formdata.lastName,
      age: formdata.age,
      gender: formdata.gender,
      destination: formdata.desdination,
      lactoseFree: formdata.lactoseFree ? true : false,
      nutsFree: formdata.nutsFree ? true : false,
      vegan: formdata.vegan ? true : false

    });
    window.location.href = `http://localhost:3000/?${queryParams.toString()}`;
  };

  return (
    <>
   <Form
   formdata={formdata}
   handleChange={handleChange}
   handleSubmit={handleSubmit}
   />
   <div className='enteredInfo'>
  <h2>Entered Information:</h2>
  <p>Your name: {formdata.firstName} {formdata.lastName}</p>
  <p>Your age: {formdata.age}</p>
  <p>Your gender: {formdata.gender}</p>
  <p>Your destination: {formdata.destination}</p>
  <p>Your dietary restrictions:</p>
  <div className='restrictions'>
    <span>**Nuts free: {formdata.nutsFree ? 'Yes' : 'No'}</span> <br />
    <span>**Lactose free: {formdata.lactoseFree ? 'Yes' : 'No'}</span> <br />
    <span>**Vegan meal: {formdata.vegan ? 'Yes' : 'No'}</span> <br />
  </div>
</div>
    </>
  )
}

export default App
