import React, { useState } from 'react'

function DestructuringAssignment() {

    // Basic Approach
    const names = ['Thushara', 'Thiwanka', 'Hello', 'World']
    // const [fName, lName] = names;
    const [fName, lName, ...re] = names;

    // React Approach
    const [myName, setMyName] = useState('Thushara');

    // With Objects
    const user = {
        name: 'Thushara',
        age: 24,
        school: 'BC',
        city: 'Kegalle',
        bestFriend: {
            name: 'Lucifer',
            age: 299,
            bestFriend: {
                name: 'Eve'
            }
        }
    }
    // const { name, age, ...rest } = user; // rest is an Object
    const { bestFriend: { name: bestFname, age: bestFage, bestFriend: { name: eve } }, name, age, ...rest } = user; // rest is an Object

    return (
        <>
            <h1>{fName} {lName} {re} {re[0]}</h1>
            <h2>{myName}</h2>
            <h3>{name} is {age} years old. School {rest.school}. City {rest.city}</h3>
            <h3>Bestfriend Name: {bestFname} Age: {bestFage}</h3>
            <h3>Lucifer's best friend: {eve}</h3>
        </>
    )
}

export default DestructuringAssignment
