import MyContext from "./MyContext";
import { useContext } from "react";

// const GrandChildOne = (props) => {
const GrandChildOne = () => {
  const [isSubscribed, setIsSubscribed] = useContext(MyContext);
  return (
    <div className="grandchild first">
      <h3>Grand child one component</h3>
      {/* <button onClick={props.subscribe}>Subscribe</button> */}
      <button onClick={() => setIsSubscribed(true)}>Subscribe</button>
    </div>
  );
};
export default GrandChildOne;
