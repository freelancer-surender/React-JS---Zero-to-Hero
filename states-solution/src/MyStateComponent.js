import React from "react";

class MyStateComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <div style={{ fontSize: "40px", fontWeight: "bold", color: "orange" }}>
          {this.state.count}
        </div>
        <button style={{backgroundColor: "greenyellow"}} onClick={this.increment}>Increase</button>
        <button style={{backgroundColor: "orangered"}} onClick={this.decrement}>Decrease</button>
        <button style={{backgroundColor: "#61fbdb"}} onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default MyStateComponent;
