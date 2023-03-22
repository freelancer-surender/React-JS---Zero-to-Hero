const ChildTwo = (props) => {
  const handleInput = (value) => {
    props.updateInput(value);
  };

  return (
    <div className="child second">
      <h3>Second Child Component</h3>
      <div className={`box ${props.isColorChanged ? "green" : "red"}`}></div>
      <div className="input">
        <input type="text" onChange={(e) => handleInput(e.target.value)} />
      </div>
    </div>
  );
};

export default ChildTwo;
