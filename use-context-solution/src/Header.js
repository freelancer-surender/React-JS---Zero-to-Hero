import MyContext from "./MyContext";
import { useContext } from "react";
import "./Header.css";

const Header = ({ setActiveTab }) => {
  const [count, setCount] = useContext(MyContext);

  return (
    <div className="header">
      <div className="left">
        <div className="nav-item" onClick={() => setActiveTab("snacks")}>
          Snacks
        </div>
        <div className="nav-item" onClick={() => setActiveTab("fruits")}>
          Fruits
        </div>
      </div>
      <div className="right">Cart - {count} products</div>
    </div>
  );
};

export default Header;
