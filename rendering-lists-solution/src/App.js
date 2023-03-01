import Student from "./Student";
import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, firstName: "Harry", age: 24, country: "India" },
    { id: 2, firstName: "Ron", age: 25, country: "USA" },
    { id: 3, firstName: "Hermione", age: 23, country: "Tunisia" },
  ]);
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");

  const onAdd = () => {
    students.push({
      id: Math.max(...students.map((student) => student.id)) + 1,
      firstName,
      age,
      country,
    });
    setStudents([...students]);
    reset();
  };

  const onDelete = (id) => {
    let studentIndex = students.findIndex((student) => student.id === id);
    if (studentIndex > -1) {
      students.splice(studentIndex, 1);
    }
    setStudents([...students]);
  };

  const reset = () => {
    setFirstName("");
    setAge("");
    setCountry("");
  };

  return (
    <div className="App">
      <h1>Students</h1>
      <div className="form">
        <div className="name">
          <input
            type={"text"}
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="age">
          <input
            type={"number"}
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="country">
          <input
            type={"text"}
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="action">
          <button className="addBtn" onClick={onAdd}>
            Add
          </button>
        </div>
      </div>
      <div className="heading">
        <div className="name">Name</div>
        <div className="age">Age</div>
        <div className="country">Country</div>
        <div className="action">Action</div>
      </div>
      {students.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          firstName={student.firstName}
          age={student.age}
          country={student.country}
          deleteStudent={onDelete}
        />
      ))}
    </div>
  );
}

export default App;
