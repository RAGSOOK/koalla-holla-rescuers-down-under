import React, { Component } from 'react';
import { connect } from 'react-redux';

class KoalaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: '',
            age: '',
            ready_to_transfer: '',
            notes: ''
        };
    }

    // Runs when any form inputs are changed
    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    // Runs when the form's submit 
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in submit');
        console.log(this.state);
    }

    // Display this component on the DOM
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="name" placeholder="Koala Name" />
                <input onChange={this.handleChange} type="text" name="gender" placeholder="Sex" />
                <input onChange={this.handleChange} type="number" name="age" placeholder="Age (years)" />
                <input onChange={this.handleChange} type="text" name="ready_to_transfer" placeholder="Ready to Transfer" />
                <input onChange={this.handleChange} type="text" name="notes" placeholder="Notes" />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default connect()(KoalaForm);