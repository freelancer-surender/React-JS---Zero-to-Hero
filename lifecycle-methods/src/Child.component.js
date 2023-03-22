import React from "react";

class ChildComponent extends React.Component {
  componentDidMount() {
    console.log("Child Did mount is called");
  }

  componentWillUnmount() {
    console.log("Component is unmounted");
  }

  render() {
    console.log("Child Render is called");
    return (
      <>
        <h1>Child Method</h1>        
      </>
    );
  }
}

export default ChildComponent;
