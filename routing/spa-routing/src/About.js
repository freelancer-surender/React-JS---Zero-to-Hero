import { useParams } from "react-router-dom";


const About = () => {
  const { id } = useParams();
  return <div className="main-container about">About - {id}</div>;
};

export default About;
