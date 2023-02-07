const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "purple",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px 50px",
        height: "40px"
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold", cursor: "pointer" }}>
        Logo
      </div>
      <div style={{ fontSize: "18px", fontWeight: "bold", cursor: "pointer" }}>
        Logout
      </div>
    </div>
  );
};

export default Header;
