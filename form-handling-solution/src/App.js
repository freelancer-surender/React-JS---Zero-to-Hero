import { useRef, useState } from "react";
import "./App.css";

function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const deptRef = useRef();
  const isAgreedRef = useRef();
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [deptErr, setDeptErr] = useState("");
  const [isAgreedErr, setIsAgreedErr] = useState("");
  const [isNameDirty, setIsNameDirty] = useState(false);
  const [isEmailDirty, setIsEmailDirty] = useState(false);
  const [isDeptDirty, setIsDeptDirty] = useState(false);
  const [isAgreedDirty, setIsAgreedDirty] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const resetForm = () => {
    console.log("On Reset Fn");
    nameRef.current.value = "";
    emailRef.current.value = "";
    ageRef.current.value = "";
    deptRef.current.value = "";
    isAgreedRef.current.checked = false;
    setNameErr("");
    setEmailErr("");
    setDeptErr("");
    setIsAgreedErr("");
    setIsNameDirty(false);
    setIsEmailDirty(false);
    setIsDeptDirty(false);
    setIsAgreedDirty(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("On Submit Fn");
    let isFormValid = validateForm();
    if (isFormValid) {
      submitForm();
    }
  };

  const submitForm = () => {
    console.log("Full name: " + nameRef.current.value);
    console.log("Email: " + emailRef.current.value);
    console.log("Age: " + ageRef.current.value);
    console.log("Department: " + deptRef.current.value);
    console.log("Is Agreed to T&C: " + isAgreedRef.current.checked);
    resetForm();
  };

  const validateForm = () => {
    let isValid = true;
    let fullName = nameRef.current.value;
    let email = emailRef.current.value;
    let dept = deptRef.current.value;
    let isAgreed = isAgreedRef.current.checked;
    // Fullname, email and department fields should be required
    // Email should be in a standard email format
    // User has to check the checkbox
    if (isNameDirty && fullName.trim() === "") {
      isValid = false;
      setNameErr("Full name is required");
      setIsSubmitDisabled(true);
    } else {
      setNameErr("");
    }
    if (isEmailDirty && email.trim() === "") {
      isValid = false;
      setEmailErr("Email is required");
      setIsSubmitDisabled(true);
    }
    if (isEmailDirty && email.trim() !== "" && !validateEmail(email)) {
      isValid = false;
      setEmailErr("Email is not valid");
      setIsSubmitDisabled(true);
    } 
    if (isEmailDirty && email.trim() !== "" && validateEmail(email)) {
      setEmailErr("");
    }
    if (isDeptDirty && dept.trim() === "") {
      isValid = false;
      setDeptErr("Department is required");
      setIsSubmitDisabled(true);
    } else {
      setDeptErr("");
    }
    if (isAgreedDirty && !isAgreed) {
      isValid = false;
      setIsAgreedErr("Please agree with terms and conditions");
      setIsSubmitDisabled(true);
    } else {
      setIsAgreedErr("");
    }
    if (
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      validateEmail(email) &&
      dept.trim() !== "" &&
      isAgreed
    ) {
      setIsSubmitDisabled(false);
    }
    return isValid;
  };

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const validateNameField = () => {
    setIsNameDirty(true);
    validateForm();
  };

  const validateEmailField = () => {
    setIsEmailDirty(true);
    validateForm();
  };

  const validateDeptField = () => {
    setIsDeptDirty(true);
    validateForm();
  };

  const validateAgreedField = () => {
    setIsAgreedDirty(true);
    validateForm();
  };

  return (
    <>
      <h2>Form Handling</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div
            className={`form-group ${
              isNameDirty && nameErr.length > 0 ? "err" : null
            }`}
          >
            <label htmlFor="fname">First name</label>
            <input
              className="form-control"
              type="text"
              id="fname"
              ref={nameRef}
              onChange={validateNameField}
            />
            {isNameDirty ? <span className="error">{nameErr}</span> : null}
          </div>
          <div
            className={`form-group ${
              isEmailDirty && emailErr.length > 0 ? "err" : null
            }`}
          >
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="text"
              id="email"
              ref={emailRef}
              onChange={validateEmailField}
            />
            {isEmailDirty ? <span className="error">{emailErr}</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              className="form-control"
              type="number"
              id="age"
              ref={ageRef}
            />
          </div>
          <div
            className={`form-group ${
              isDeptDirty && deptErr.length > 0 ? "err" : null
            }`}
          >
            <label htmlFor="dept">Department</label>
            <select
              className="form-control"
              id="dept"
              ref={deptRef}
              onChange={validateDeptField}
            >
              <option value="">Select</option>
              <option value="finance">Finance</option>
              <option value="hr">HR</option>
              <option value="it">IT</option>
              <option value="rmg">RMG</option>
              <option value="transport">Transport</option>
            </select>
            {isDeptDirty ? <span className="error">{deptErr}</span> : null}
          </div>
          <div
            className={`form-group ${
              isAgreedDirty && isAgreedErr.length > 0 ? "err" : null
            }`}
          >
            <div className="checkbox-input">
              <input
                type="checkbox"
                ref={isAgreedRef}
                onChange={validateAgreedField}
              />
              <label>Agree with Terms and Conditions?</label>
            </div>
            {isAgreedDirty ? (
              <span className="error special">{isAgreedErr}</span>
            ) : null}
          </div>
          {isSubmitDisabled ? (
            <button type="button" className="btn btn-primary" disabled>
              Submit
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
          <button type="button" className="btn btn-default" onClick={resetForm}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
