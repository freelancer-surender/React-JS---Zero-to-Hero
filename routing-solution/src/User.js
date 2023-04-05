import { useState, useContext, useEffect } from "react";
import UserContext from "./UserContext";
import { useParams } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useContext(UserContext);
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let tempUser = users.find((user) => user.id == id);
    setUser(tempUser);
  }, [id, users]);

  return (
    <div className="user-detail">
      <div className="user-left">
        <img src={user.pic} alt="" />
      </div>
      <div className="user-right">
        <div className="name">{user?.name}</div>
        <div className="cast">{user?.cast}</div>
        <div className="intro">{user?.intro}</div>
      </div>
    </div>
  );
};
export default User;
