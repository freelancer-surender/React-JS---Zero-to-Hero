import { useContext } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useContext(UserContext);

  const navigate = useNavigate();

  const goToUser = (userId) => {
    navigate(`/user/${userId}`);
  };

  return (
    <div className="users-container">
      {users?.map((user) => (
        <div key={user.id} className="user" onClick={() => goToUser(user.id)}>
          {user.name}
        </div>
      ))}
    </div>
  );
};
export default Users;
