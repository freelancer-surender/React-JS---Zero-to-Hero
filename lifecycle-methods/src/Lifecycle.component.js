import React from "react";
import ChildComponent from "./Child.component";

class LifeCycleComponent extends React.Component {
  constructor() {
    super();
    console.log("Constructor is called");

    this.state = {
      count: 0,
      show: false,
    };

    this.increment = this.increment.bind(this);
    this.showComponent = this.showComponent.bind(this);
  }

  componentDidMount() {
    console.log("Did mount is called");
    // this.setState({count: 5});
  }

  componentDidUpdate() {
    // this.setState({count: 6});
    console.log("Did update is called");
  }

  shouldComponentUpdate() {
    console.log("Should component update is called");
    return true;
  }

  increment() {
    this.setState({ count: 6 });
  }

  showComponent() {
    this.setState({ ...this.state, show: true });
  }

  hideComponent = () => {
    this.setState({ ...this.state, show: false });
  };

  render() {
    console.log("Render is called");
    return (
      <>
        <h1>Lifecycle Methods</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.showComponent}>Show</button>
        <button onClick={this.hideComponent}>Hide</button>
        <hr />
        {this.state.show ? <ChildComponent /> : null}
      </>
    );
  }
}

export default LifeCycleComponent;
