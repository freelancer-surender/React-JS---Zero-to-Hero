import { useState, useEffect } from "react";
import Child from "./Child";

const MyUseEffectHook = () => {

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);  
  const [isChild, setIsChild] = useState(false);

  const increment = () => {
    console.log("Increment is called");
    setCount(count + 1);
  }

  const updateAge = () => {
    console.log("Update age is called");
    setAge(age + 1);
  }

  const show = () => {
    setIsChild(true);
  }

  const hide = () => {
    setIsChild(false);
  }

  useEffect(() => {
    console.log("Fetch from database...");
  }, [count, age]);

  return (
    <>
      <h1>useEffect</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={updateAge}>Increase age</button>
      <button onClick={show}>Show child</button>
      <button onClick={hide}>Hide child</button>
      {isChild ? <Child /> : null}
    </>
  );
};

export default MyUseEffectHook;
