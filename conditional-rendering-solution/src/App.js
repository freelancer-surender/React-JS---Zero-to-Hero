import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="App">
      <div className="header">
        <div
          className={`link ${activeTab === "products" ? "active" : null}`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </div>
        <div
          className={`link ${activeTab === "contactus" ? "active" : null}`}
          onClick={() => setActiveTab("contactus")}
        >
          Contact us
        </div>
      </div>
      <div className="content">
        {activeTab === "products" ? <div>Products page</div> : null}
        {activeTab === "contactus" ? <div>Contact us page</div> : null}
      </div>
    </div>
  );
}

export default App;
