import GrandChildTwo from "./GrandChildTwo";

// const ChildTwo = (props) => {
const ChildTwo = () => {
  return (
    <div className="child second">
      <h2>Second Child Component</h2>
      {/* <GrandChildTwo isSubscribed={props.isSubscribed} /> */}
      <GrandChildTwo />
    </div>
  );
};

export default ChildTwo;
