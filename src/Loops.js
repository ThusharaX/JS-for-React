import React from 'react'

function User({ name, age, subscribers = [], ...rest }) {

    // calculate the total number of subscribers
    let sum = 0;
    for (let i = 0; i < subscribers.length; i++) {
        sum += subscribers[i];
    }
    // calculate the average number of subscribers
    const avg = sum / subscribers.length;

    return (
        <dev>
            <h1>Name: {name} Age: {age}</h1>
            <h2>Avg: {avg || 'No Statictics'}</h2> {/* toFixed(2) is used to display 2 decimal places */}
        </dev>
    )
}

function Loops() {

    const user = {
        name: 'Thushara',
        age: 24,
        sex: 'male',
        subscribers: [12, 24, 34, 53, 75, 23],
        school: 'BC',
        city: 'Kegalle'
    }

    return (
        <div>
            <User {...user} />
        </div>
    )
}

export default Loops
