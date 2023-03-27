import GrandChildOne from "./GrandChildOne";

// const ChildOne = (props) => {
const ChildOne = () => {
  return (
    <div className="child first">
      <h2>First Child Component</h2>
      {/* <GrandChildOne subscribe={props.subscribe} /> */}
      <GrandChildOne />
    </div>
  );
};

export default ChildOne;
