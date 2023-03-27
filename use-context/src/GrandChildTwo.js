import MyContext from "./MyContext";
import { useContext } from "react";

// const GrandChildTwo = (props) => {
const GrandChildTwo = () => {
  // const value = useContext(MyContext);
  const [isSubscribed, setIsSubscribed] = useContext(MyContext);
  return (
    <div className="grandchild second">
      <h3>Grand child two component</h3>
      <div className="message">
        {/* {props.isSubscribed ? ( */}
        {isSubscribed ? (
          <div className="greenColor">
            Thank you very much. It motivates me a lot.
          </div>
        ) : (
          <div className="redColor">
            Please subscribe. It just takes few seconds.
          </div>
        )}
      </div>
    </div>
  );
};
export default GrandChildTwo;
