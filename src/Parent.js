import React, { Component } from 'react'; // class-based components
import Child from './Child';

class Parent extends Component {
   state = {
       car: 'Porsche'
   }

   updateCar = (newCar) => {
       this.setState({
        car: newCar
       })
   }

    render() {
        return (
        <div>
            <p>The parent car is {this.state.car}</p>
            <Child updateCar={this.updateCar} />
        </div>
        )
    }
}

export default Parent;
