import React, { Component } from 'react';

class MoodTracker extends Component {
    state = {
        moodPoints: 1
    }

    increaseMood = () => {
        let newMood;
        if (this.state.moodPoints >= 5) {
            newMood = 100;
            this.setState({
                moodPoints: newMood
            })
        } else {
            this.setState({
                moodPoints: this.state.moodPoints + 1
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Mood Tracker</h1>
                <p>On a scale from 1-10, what is your mood?</p>
                <p>My current mood is {this.state.moodPoints}</p>
                <button onClick={this.increaseMood}>Cheer up, buddy</button>
                
            </div>
        )
    }
}

export default MoodTracker;

// notes
// const paragraphElement = document.querySelector('p');
// paragraphElement.addEventListener('click', () => {
//     // do something

// });

// paragraphElement.onclick = () => {

// }