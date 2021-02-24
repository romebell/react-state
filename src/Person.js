import React, { Component } from 'react'; // class-based components

class Person extends Component {
    state = {
        city: 'Los Angeles',
        phone: '888-888-8888',
        name: this.props.info.name,
        college: 'UCLA'
    }


    render() {
        
        return (
        <div>
            <h2>{this.props.info.name}</h2>
            <p>{this.state.city}</p>
            <p>{this.state.college}</p>
        </div>
        )
    }
}

export default Person;