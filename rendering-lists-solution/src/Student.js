import "./Student.css";

const Student = ({ id, firstName, age, country, deleteStudent }) => {
  return (
    <div className="student" key={id}>
      <div className="name">{firstName}</div>
      <div className="age">{age}</div>
      <div className="country">{country}</div>
      <div className="action">
        <button className="deleteBtn" onClick={() => deleteStudent(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Student;
