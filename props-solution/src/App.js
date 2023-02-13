import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <h1>Props Exercise</h1>
      <Button
        btnColor="#007bff"
        btnTextColor="#fff"
        btnSize="100px"
        borderColor="#034b99"
        textSize="20px"
        btnText="Click Me"
        radius="0px"
      />
      <Button
        btnColor="#28a745"
        btnTextColor="#fff"
        btnSize="130px"
        borderColor="#28a745"
        textSize="22px"
        btnText="Submit"
        radius="10px"
      />
      <Button
        btnColor="#dc3545"
        btnTextColor="#fff"
        btnSize="80px"
        borderColor="#7e0b16"
        textSize="18px"
        btnText="Cancel"
        radius="25px"
      />
      <Button
        btnColor="#ffc107"
        btnTextColor="#000"
        btnSize="100px"
        borderColor="#ffc107"
        textSize="20px"
        btnText="Reset"
        radius="5px"
      />
    </div>
  );
}

export default App;
