import React, { useState } from 'react'

function FormsF() {

    const [inputField, setInputField] = useState({
        fName: 'Thushara',
        age: 24
    })

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputField(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={inputField.fName} onChange={handleChange} type='text' name='fName' placeholder='Name' />
                    <input value={inputField.age} onChange={handleChange} type='number' name='age' placeholder='Age' />
                    <button type='submit'>Submit</button>
                    <h2>{inputField.fName}</h2>
                    <h2>{inputField.age}</h2>
                    {JSON.stringify(inputField)}
                </form>
            </div>
        </div>
    )
}

export default FormsF
