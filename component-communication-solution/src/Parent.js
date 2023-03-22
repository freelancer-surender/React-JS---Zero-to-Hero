import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const Parent = () => {
  const [isColorChanged, setIsColorChanged] = useState(false);
  const [childInput, setChildInput] = useState("");

  const handleChildInput = (value) => {
    setChildInput(value);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="children-container">
        <ChildOne
          setIsColorChanged={setIsColorChanged}
          childInput={childInput}
        />
        <ChildTwo
          isColorChanged={isColorChanged}
          updateInput={handleChildInput}
        />
      </div>
    </div>
  );
};

export default Parent;
