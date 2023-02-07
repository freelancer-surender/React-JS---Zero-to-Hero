import Student from "./Student";

function App() {
  function print() {
    return "WebTechTalk";
  }

  return (
    <>
      {/* <h1 style={{ color: "white", backgroundColor: "red" }}>
        Welcome to {print()}. Please subscribe and support
      </h1>
      <h2 className="sub-title">Thanks</h2>
      <label htmlFor="fName">Firstname</label>
      <input
        name="fName"
        maxLength={5}
        autoFocus={true}
        placeholder="Enter name"
      /> */}
      <Student firstName="Harry" age="25" country="India" />
      <Student firstName="Ron" age="24" country="UK" />
      <Student firstName="Hermione" age="23" country="USA" />
    </>
  );
}

export default App;
