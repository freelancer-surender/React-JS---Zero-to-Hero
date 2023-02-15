import './App.css';

function App() {

  // function showAlert() {
  //   alert("Welcome to WebTechTalk!");
  // }

  // const request = () => {
  //   alert("Please subscribe and support");
  // }

  // const request = () => alert("Please subscribe and support");
  // const response = (msg) => alert(msg);

  // const onTextChange = (event) => {
  //   // console.log("Change event is triggered");
  //   console.log(event.target.value);
  // }

  let count = 0;

  const increment = () => {
    count = count + 1;
    console.log(count);
  }

  return (
    <div className="App">
      {/* <button onClick={showAlert}>Click Me</button> */}
      {/* <button onClick={() => showAlert()}>Click Me</button>
      <button onClick={() => alert("Please subscribe and support")}>Please</button>
      <button onClick={() => response("Thanks a lot for subscribing")}>Thanks</button> */}

      {/* <input onChange={onTextChange} /> */}

      <div style={{fontSize: "26px", fontWeight: "bold", color: "red"}}>{count}</div>
      <button onClick={increment}>Increment</button>

    </div>
  );
}

export default App;
