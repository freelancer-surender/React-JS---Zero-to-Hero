import { useEffect } from "react";

const Child = (props) => {

  const childFn = () => {
    console.log("Function in child is called");
  }

  useEffect(() => {
    childFn();
  }, [props.isClicked]);
  
  return (
    <div className="child">
      <h3>Child Component</h3>
      <div>Value from parent component: {props.parentInput}</div>
      <div>
        <input type="text" onChange={(e) => props.setChildInput(e.target.value)}/>
      </div>
      <div>
        <button onClick={props.parentFn}>Call Parent Fn</button>
      </div>
    </div>
  );
};

export default Child;
