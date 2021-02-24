import React, { Component } from 'react'; // class-based components
import MoodTracker from './MoodTracker';

class Person extends Component {
    state = {
        city: 'Los Angeles',
        phone: '888-888-8888',
        name: 'Johnny',
        college: 'UCLA'
    }

    updateCity = () => {
        this.setState({
            city: 'New York'
        })
    }

    updatePhoneNumber = () => {
        this.setState({
            phone: '859-111-2222'
        })
    }

    render() {
        return (
        <div>
            <h2>{this.state.name}</h2>
            <p>{this.state.city}</p>
            <p>{this.state.college}</p>
            <p>{this.state.phone}</p>

            <button onClick={this.updateCity}>I'm moving</button>
            <button onClick={this.updatePhoneNumber}>Change my number</button>
        </div>
        )
    }
}

export default Person;
