import { useEffect, useState, useRef } from "react";

const MyUseRef = () => {
  // const [inputValue, setInputValue] = useState("");

 const inputRef = useRef(null);

  const onSubmit = () => {
    // console.log("Input value: " + inputValue);
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    console.log("Component is rerendered");
  });

  return (
    <>
      <h1>useRef</h1>
      <div>
        {/* <input type="text" onChange={(e) => setInputValue(e.target.value)} /> */}
        <input type="text" ref={inputRef} />
      </div>
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </>
  );
};

export default MyUseRef;
