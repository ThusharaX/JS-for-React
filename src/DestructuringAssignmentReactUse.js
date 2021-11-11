import React, { useState } from 'react'

// function User(props) {
//     return (
//         <dev>
//             <h1>User: {props.name} Age: {props.age}</h1>
//         </dev>
//     )
// }

// Destructuring Assignment with Rest Parameters
// function User({ name, age }) {
//     return (
//         <dev>
//             <h1>User: {name} Age: {age}</h1>
//         </dev>
//     )
// }

// Destructuring Assignment with Spread Syntax
function User({ name, age, ...rest }) {
    return (
        <dev>
            <h1>User: {name} Age: {age}</h1>
            <h2>School: {rest.school}</h2>
            <p>{JSON.stringify(rest)}</p>
        </dev>
    )
}

function DestructuringAssignmentReactUse() {

    const user = {
        name: 'Thushara',
        age: 24,
        school: 'BC',
        city: 'Kegalle'
    }

    const { name, age } = user;

    // Referance to user
    const user2 = user;
    // user2.name = 'Thiwanka' // Also change in user

    // Create new user
    const user3 = {
        ...user,
        age: 30,
        city: 'Colombo'
    }

    user3.name = 'Thiwanka' // Also change in user

    // ---------------------------------
    // React Approach
    const [user4, setUser] = useState(
        {
            name: 'Lucifer',
            age: 299,
            school: 'BC',
            city: 'Kandy'
        }
    )
    const gettingOld = () => {
        setUser({
            ...user4,
            age: user4.age + 1
        })
    }
    // ---------------------------------

    return (
        <div>
            {/* <User name={name} age={age} /> */}
            <User {...user} /> {/* Split user in to variables */}
            <User {...user2} /> {/* Split user in to variables */}
            <User {...user3} /> {/* Split user in to variables */}

            {/* React Approach */}
            <User {...user4} /> {/* Split user in to variables */}
            <button onClick={gettingOld}>Getting Old</button>
        </div>
    )
}

export default DestructuringAssignmentReactUse
