import React from "react";

class MyStateComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    // count = 0;

    increment = () => {
        // this.state.count = this.state.count + 1;
        this.setState({
            count: this.state.count + 1
        });
        setTimeout(() => {
            console.log(this.state.count);
        });
    }

    render() {
        return (
            <div>
                <div style={{fontSize: '40px', fontWeight: 'bold', color: 'orange'}}>{this.state.count}</div>
                <button onClick={this.increment}>Increase</button>
            </div>
        )
    }
}

export default MyStateComponent;