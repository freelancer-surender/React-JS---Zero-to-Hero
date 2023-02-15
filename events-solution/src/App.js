import "./App.css";

function App() {
  const showAlert = (msg) => {
    alert(msg);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        onMouseOver={() => showAlert("Thank you very much")}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "green",
          cursor: "pointer",
          margin: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        I will subscribe
      </div>
      <div
        onMouseOver={() => showAlert("Please reconsider your decision")}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "red",
          cursor: "pointer",
          margin: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        I won't subscribe
      </div>
    </div>
  );
}

export default App;
