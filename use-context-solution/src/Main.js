import Fruits from "./Fruits";
import Snacks from "./Snacks";
import "./Main.css";

const Main = ({ activeTab }) => {
  return (
    <div className="main-container">
      {activeTab === "snacks" ? <Snacks /> : <Fruits />}
    </div>
  );
};

export default Main;
