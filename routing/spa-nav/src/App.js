import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [page, setPage] = useState("about");
  return (
    <div>
      <Header setPage={setPage} />
      <Main page={page} />
    </div>
  );
}

export default App;
