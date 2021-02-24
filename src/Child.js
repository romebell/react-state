import React, { Component } from 'react'; // class-based components

class Child extends Component {
   state = {
      name: 'Bob'
   }

    render() {
        let newCar = 'Honda';
        return (
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={() => this.props.updateCar(newCar)}>New Car</button>
        </div>
        )
    }
}

export default Child;