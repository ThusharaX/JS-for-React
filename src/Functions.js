import React from 'react'

// Function declaration
function calAvg(arr) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

// Function Expression
const hello = function () {
    return 'Hello';
}

// Function with unknown parameter count
function func(a = 0, b = 0, ...rest) {
    return rest
}

// Arrow functions
const add = (a, b) => { // or const add = (a, b) => a + b;
    return a + b;
}

// Arrow functions component
const User = ({ name, age }) => (
    <dev>
        <h1>Arrow functions component by {name} - {age}</h1>
    </dev>
);

function Functions() {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div>
            <h1>{calAvg(arr)}</h1>
            <h2>{hello()}</h2>
            <h2>{func(2, 4, 5, 6)}</h2> {/* with ...rest */}
            <h2>Arrow Func. : {add(2, 4)}</h2>
            <User name='Thushara' age='24' />
        </div>
    )
}

export default Functions
