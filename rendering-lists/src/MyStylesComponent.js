import Student from "./Student";
import myStyles from "./MyStyles.module.css";

const MyStylesComponent = () => {
  const students = [
    { id: 1, firstName: "Harry", age: 24, country: "India" },
    { id: 2, firstName: "Ron", age: 25, country: "USA" },
    { id: 3, firstName: "Hermione", age: 23, country: "UK" },
  ];

  return (
    <div className={myStyles.students}>
      {/* <Student firstName="Harry" age="25" country="India" />
      <Student firstName="Ron" age="24" country="UK" />
      <Student firstName="Hermione" age="23" country="USA" /> */}
      {students.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          firstName={student.firstName}
          age={student.age}
          country={student.country}
        />
      ))}
      <div className={myStyles.student}>Test</div>
    </div>
  );
};

export default MyStylesComponent;
