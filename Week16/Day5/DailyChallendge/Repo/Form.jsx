import React from "react";

const Form = ({ formdata, handleChange, handleSubmit }) => {
    return (
        <>
            <div className='sample'>
                <h1>Sample Form</h1>
            </div>
            <form className='inputForm' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder='First Name'
                    value={formdata.firstName}
                    onChange={handleChange}
                /> <br />
                <input
                    type="text"
                    placeholder='Last Name'
                    name="lastName"
                    value={formdata.lastName}
                    onChange={handleChange}
                /> <br />
                <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder='Age'
                    value={formdata.age}
                    onChange={handleChange}
                /> <br />
                <div>
                    <label>
                    <input 
                    type="radio" 
                    name="gender" 
                    id="male" 
                    value="male" 
                    checked={formdata.gender === 'male'}
                    onChange={handleChange}
                    />
                    Male
                    </label>
                    <label>
                    <input 
                    type="radio" 
                    name="gender" 
                    id="female" 
                    value="female" 
                    checked={formdata.gender === 'female'}
                    onChange={handleChange}/>
                    Female
                    </label>
                </div> <br />

                <label htmlFor="destination-select">Choose your destination</label> <br />
                <select 
                name="destination" 
                id="destination-select"
                value={formdata.destination}
                onChange={handleChange}>
                    <option value="">--Please choose a destination--</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>

                </select>
                <br />
                <br />
                <legend> Dietary restrictions:</legend>
                <div>
                    <input type="checkbox" 
                    name="nutsFree" 
                    id="nutsFree" 
                    value="nutsFree" 
                    checked={formdata.nutsFree}
                    onChange={handleChange}/>
                    <label htmlFor="NutsFree">Nuts free</label><br />
                    <input type="checkbox" 
                    name="lactoseFree" 
                    id="lactoseFree" 
                    value="lactoseFree" 
                    checked={formdata.lactoseFree}
                    onChange={handleChange}/>
                    <label htmlFor="LactoseFree">Lactose free</label> <br />
                    <input type="checkbox" 
                    name="vegan" id="vegan"
                    value="vegan" 
                    checked={formdata.vegan}
                    onChange={handleChange}/>
                    <label htmlFor="Vegan">Vegan</label>
                </div> <br />
                <button type="submit">Submit</button>
            </form>
            <hr />
            
        </>
    )
}

export default Form;