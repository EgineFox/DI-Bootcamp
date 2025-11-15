import React from "react";

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
    }
    handleClick = () => {
        this.setState(({ counter }) => ({ counter: counter + 1 }));
    };

    render() {
        if (this.state.counter === 5) {
            throw new Error('I crashed!');
           
        }

        return (
            <div>
                <h1> {this.state.counter}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

export default BuggyCounter;