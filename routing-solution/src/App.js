import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import User from "./User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  );
}

export default App;
