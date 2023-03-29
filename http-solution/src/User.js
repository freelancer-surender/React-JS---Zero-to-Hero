import "./User.css";

const User = ({ name, img, url }) => {
  const goToUser = () => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="user" onClick={goToUser}>
      <div className="img">
        <img src={img} alt={name} width={300} />
      </div>
      <div className="name">{name}</div>
    </div>
  );
};

export default User;
