import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users").then((users) => {
      setUsers(users.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>HTTP in React using Axios</h1>
      <div className="users">
        {users.map((user) => (
          <User
            key={user.id}
            name={user.login}
            img={user.avatar_url}
            url={user.html_url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
