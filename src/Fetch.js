import React, { useState } from 'react'

function Fetch() {

    // https://swapi.dev/api/people/1


    const [inputField, setInputField] = useState({
        userID: 0,
        data: {
            name: 'Not Found'
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://swapi.dev/api/people/${inputField.userID}`)
            .then((response) => response.json())
            .then((data) => {

                setInputField(prevState => ({
                    ...prevState,
                    data: data
                }))
            })
            .catch((error) => {
                console.log(error);
            })
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
                    <label htmlFor="userID">User ID : </label>
                    <input value={inputField.userID} onChange={handleChange} type='number' name='userID' placeholder='userID' />
                    <button type='submit'>Submit</button>
                </form>
                <h2>{inputField.userID} - {inputField.data.name}</h2>
                {JSON.stringify(inputField.data)}
            </div>
        </div>
    )
}

export default Fetch
