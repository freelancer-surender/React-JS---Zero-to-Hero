
const Student = ({firstName, age, country}) => {
    // const firstName = props.firstName;
    // const {firstName, age, country} = props;
    return <div>
        <h1>{firstName}</h1>
        <h3>Age: {age}</h3>
        <h3>Country: {country}</h3>
    </div>
}

export default Student;