import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("snacks");

  return (
    <div>
      <Header setActiveTab={setActiveTab} />
      <Main activeTab={activeTab} />
    </div>
  );
}

export default App;
