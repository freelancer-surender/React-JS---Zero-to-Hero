
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-item">
        <Link to="/about/123456">About</Link>
      </div>
      <div className="nav-item">
        <Link to="/product">Product</Link>
      </div>
      <div className="nav-item">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
export default Header;
