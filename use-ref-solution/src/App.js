import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const stateRef = useRef(null);
  const countryRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState("");

  const nameHandler = () => {
    nameRef.current.focus();
    setActiveBtn("name");
  };

  const ageHandler = () => {
    ageRef.current.focus();
    setActiveBtn("age");
  };

  const genderHandler = () => {
    genderRef.current.focus();
    setActiveBtn("gender");
  };

  const stateHandler = () => {
    stateRef.current.focus();
    setActiveBtn("state");
  };

  const countryHandler = () => {
    countryRef.current.focus();
    setActiveBtn("country");
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className="App">
      <h1>useRef Exercise</h1>
      <div className="form-control">
        <input ref={nameRef} type="text" placeholder="Name" />
      </div>
      <div className="form-control">
        <input ref={ageRef} type="text" placeholder="Age" />
      </div>
      <div className="form-control">
        <input ref={genderRef} type="text" placeholder="Gender" />
      </div>
      <div className="form-control">
        <input ref={stateRef} type="text" placeholder="State" />
      </div>
      <div className="form-control">
        <input ref={countryRef} type="text" placeholder="Country" />
      </div>
      <div className="btn-container">
        <button
          className={activeBtn === "name" ? "active" : null}
          onClick={nameHandler}
        >
          Name
        </button>
        <button
          className={activeBtn === "age" ? "active" : null}
          onClick={ageHandler}
        >
          Age
        </button>
        <button
          className={activeBtn === "gender" ? "active" : null}
          onClick={genderHandler}
        >
          Gender
        </button>
        <button
          className={activeBtn === "state" ? "active" : null}
          onClick={stateHandler}
        >
          State
        </button>
        <button
          className={activeBtn === "country" ? "active" : null}
          onClick={countryHandler}
        >
          Country
        </button>
      </div>
    </div>
  );
}

export default App;
