import React from 'react'

function ErrorHandling() {

    const user = {
        name: 'Thushara',
        age: 24,
        sex: 'male',
        // subscribers: [12, 24, 34, 53, 75, 23],
        school: 'BC',
        city: 'Kegalle'
    }

    let sum = 0;
    let avg = 0;

    try {
        for (let i = 0; i < user.subscribers.length; i++) {
            sum += user.subscribers[i];
        }
        avg = sum / user.subscribers.length;
    } catch (error) {
        console.log(error);
        avg = 'No Statistics';
    }

    return (
        <div>
            <h1>Avarage: {avg}</h1>
        </div>
    )
}

export default ErrorHandling
