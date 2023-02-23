import { useState } from "react";

const MyStateComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div style={{ fontSize: "40px", fontWeight: "bold", color: "red" }}>
        {count}
      </div>
      <button style={{ backgroundColor: "darkgreen", color: "white" }} onClick={increment}>
        Increase
      </button>
      <button style={{ backgroundColor: "darkred", color: "white" }} onClick={decrement}>
        Decrease
      </button>
      <button style={{ backgroundColor: "darkcyan", color: "white" }} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default MyStateComponent;
