const Header = ({ setPage }) => {
  return (
    <div className="nav">
      <div className="nav-item" onClick={() => setPage("about")}>
        About
      </div>
      <div className="nav-item" onClick={() => setPage("product")}>
        Product
      </div>
      <div className="nav-item" onClick={() => setPage("contact")}>
        Contact
      </div>
    </div>
  );
};
export default Header;
