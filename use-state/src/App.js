
import { useState } from 'react';
import "./App.css";

function App() {
  // let counter = 0;

  // console.log(useState(0));

  // const [counter, setCounter] = useState(0);
  // const [isSubscribed, setIsSubscribed] = useState(false);

  const [state, setState] = useState({
    counter: 0,
    isSubscribed: false
  });

  const increment = () => {
    // counter = counter + 1;
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter => counter + 1);
    // setCounter(counter => counter + 1);
    // setCounter(counter => counter + 1);
    // console.log(counter);
    setState({...state, counter: state.counter + 1});
  };

  const subscribe = () => {
    // setIsSubscribed(true);
    setState({...state, isSubscribed: true});
  }

  return (
    <div className="App">
      <div className="counter">{state.counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={subscribe}>Please Subscribe</button>
    </div>
  );
}

export default App;
