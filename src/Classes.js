import React from 'react'

// Parent Class
class Person {
    sayMyName() {
        return `My name is ${this.name}`;
    }
}

// Child Class
class User extends Person {
    constructor(uName, uAge) {
        super();
        this.name = uName;
        this.age = uAge;
    };

    hello() { // Method
        return `Hello ${this.name}`;
    }
}

// React Approach
class Component1 extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Thiwanka',
            school: 'BC'
        };
    }

    render() {
        return (
            <div>
                <h3>Component 1 - Name: {this.state.name}</h3>
            </div>
        )
    }
}

function Classes() {

    const user = {
        name: 'Thushara',
        age: 24
    };

    const userSilva = new User('Thushara', 24);

    return (
        <div>
            <h1>{userSilva.name}</h1>
            <h2>{userSilva.hello()}</h2>
            <h2>{userSilva.sayMyName()}</h2>
            <Component1 />
        </div>
    )
}

export default Classes
