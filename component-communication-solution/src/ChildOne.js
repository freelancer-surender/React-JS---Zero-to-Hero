const ChildOne = (props) => {
  const updateChildTwo = () => {
    props.setIsColorChanged(true);
  };
  return (
    <div className="child first">
      <h3>First Child Component</h3>
      <button onClick={updateChildTwo}>Change Child 2</button>
      <div className="childValue">Value from Child Two: {props.childInput}</div>
    </div>
  );
};

export default ChildOne;
