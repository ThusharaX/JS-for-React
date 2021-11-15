import React from 'react'

function User({ name, age, ...rest }) {

    if (name && name === 'Thushara') { // Empty string('' / "") = false
        return (
            <dev>
                <h1>Name: {`${rest.sex === 'male' ? 'Mr.' : 'Mrs.'}`} {name}</h1>
            </dev>
        )
    }
    else {
        return (
            <dev>
                <h1>No Name</h1>
            </dev>
        )
    }
}

function Conditions() {

    const user = {
        name: 'Thushara',
        age: 24,
        sex: 'male',
        school: 'BC',
        city: 'Kegalle'
    }

    return (
        <div>
            <User {...user} />
        </div>
    )
}

export default Conditions
