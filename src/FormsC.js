// Using Class
import React, { Component } from 'react'

export default class FormsC extends Component {

    constructor() {
        super();
        this.state = {
            fName: 'Thiwanka',
            age: 24
        };
    }

    handleSubmit = (event) => { // event is an object that contains all the information about the event that has occurred in the form
        event.preventDefault();
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.fName} onChange={this.handleChange} type='text' name='fName' placeholder='Name' />
                    <input value={this.state.age} onChange={this.handleChange} type='number' name='age' placeholder='Age' />
                    <button type='submit'>Submit</button>
                </form>
                <h2>{this.state.fName}</h2>
                <h2>{this.state.age}</h2>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}
