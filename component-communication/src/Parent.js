import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentInput, setParentInput] = useState("");
  const [childInput, setChildInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const parentFn = () => {
    console.log("Function in parent is called");
  };

  const clickChild = () => {
    setIsClicked(true);
  };

  return (
    <div className="parent">
      <h3>Parent Component</h3>
      <input type="text" onChange={(e) => setParentInput(e.target.value)} />
      <div>Value from child component: {childInput}</div>
      <div>
        <button onClick={clickChild}>Call Child Fn</button>
      </div>
      <Child
        parentInput={parentInput}
        setChildInput={setChildInput}
        parentFn={parentFn}
        isClicked={isClicked}
      />
    </div>
  );
};

export default Parent;
