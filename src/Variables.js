import React from 'react'

function Variables() {

    // Constant Variables
    const name = 'Thushara';
    const age = 24;
    const isAdmin = true;

    // Changeable Variables
    let followerCount = 25;
    followerCount = 10;
    let school = null;

    // Objects
    const user = {
        fName: 'Thushara',
        age: 22,
        [name]: 'Thiwanka'
    }

    return (
        <div>
            <h1>Hello {user.age}</h1>
            <h1>Hello {user['Thushara']}</h1>
            <h1>Hello {user[name]}</h1>
        </div>
    )
}

export default Variables
