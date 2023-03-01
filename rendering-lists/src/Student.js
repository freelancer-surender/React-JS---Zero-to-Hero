import styles from './Student.module.css';

const Student = ({id, firstName, age, country}) => {
    console.log(id);
    console.log(firstName);
    // const firstName = props.firstName;
    // const {firstName, age, country} = props;
    return <div className={styles.student}>
        <h1 style={{color: "red"}}>{firstName}</h1>
        <h3>Age: {age}</h3>
        <h3>Country: {country}</h3>
    </div>
}

export default Student;