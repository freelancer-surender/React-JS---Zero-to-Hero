import './Character.css';

const Character = ({ name, cast, pic, intro }) => {
  return (
    <div className="character">
      <div className="left">
        <img src={pic} alt={name} />
      </div>
      <div className="right">
        <div className="name">{name}</div>
        <div className="cast">{cast}</div>
        <div className="intro">{intro}</div>
      </div>
    </div>
  );
};

export default Character;
