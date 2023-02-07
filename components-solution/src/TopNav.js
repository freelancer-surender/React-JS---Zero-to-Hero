const TopNav = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "60px"
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "purple",
          margin: "50px",
        }}
      >
        About
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "purple",
          margin: "50px",
        }}
      >
        Products
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "purple",
          margin: "50px",
        }}
      >
        Services
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "purple",
          margin: "50px",
        }}
      >
        Contact Us
      </div>
    </div>
  );
};

export default TopNav;
