import { useState } from "react";
import "./ConditionalComponent.css";

const ConditionalComponent = () => {
  const [boxColor, setBoxColor] = useState("red");

  // const renderElement = () => {
  //   if (boxColor === "red") {
  //     return <div className="redBox"></div>;
  //   }
  //   return <div className="greenBox"></div>;
  // }

  // const renderElement = () => {
  //   switch (boxColor) {
  //     case "red":
  //       return <div className="redBox"></div>;
  //     case "green":
  //       return <div className="greenBox"></div>;
  //     default:
  //       return null;
  //   }
  // }

  const renderElement = () => {
    return boxColor === "red" ? (
      <div className="redBox"></div>
    ) : (
      <div className="greenBox"></div>
    );
  };

  return (
    <div>
      <h1>Conditional Rendering</h1>
      {/* <div className="btn-container">
        {boxColor === "red" && (
          <>
            <button className="redBtn active" onClick={() => setBoxColor("red")}>
              Red
            </button>
            <button className="greenBtn" onClick={() => setBoxColor("green")}>
              Green
            </button>
          </>
        )}
        {boxColor === "green" && (
          <>
            <button className="redBtn" onClick={() => setBoxColor("red")}>
              Red
            </button>
            <button className="greenBtn active" onClick={() => setBoxColor("green")}>
              Green
            </button>
          </>
        )}
      </div> */}

      {/* <div className="btn-container">
        <button
          className={boxColor === "red" ? "redBtn active" : "redBtn"}
          onClick={() => setBoxColor("red")}
        >
          Red
        </button>
        <button
          className={boxColor === "green" ? "greenBtn active" : "greenBtn"}
          onClick={() => setBoxColor("green")}
        >
          Green
        </button>
      </div> */}

      <div className="btn-container">
        <button
          className={`redBtn ${boxColor === "red" ? " active" : null}`}
          onClick={() => setBoxColor("red")}
        >
          Red
        </button>
        <button
          className={`greenBtn ${boxColor === "green" ? " active" : null}`}
          onClick={() => setBoxColor("green")}
        >
          Green
        </button>
      </div>

      <div className="box-container">
        {/* {renderElement()}         */}
        {/* {boxColor === "red" ? (
          <div className="redBox"></div>
        ) : (
          <div className="greenBox"></div>
        )} */}

        {/* {boxColor === "red" ? <div className="redBox"></div> : null}
        {boxColor === "green" ? <div className="greenBox"></div> : null} */}

        {boxColor === "red" && <div className="redBox"></div>}
        {boxColor === "green" && <div className="greenBox"></div>}
      </div>
    </div>
  );
};

export default ConditionalComponent;
