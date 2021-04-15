import { useState, useContext } from "react";
import { BiCaretDown } from "react-icons/all";
import Context from "../context/Context";
import ClassesDropdown from "./ClassesDropdown";
import * as studentActions from "../redux/student/studentActions";
import { connect } from "react-redux";

const AddStudentForm = ({ classes, ADD_STUDENT, processing }) => {
  //state for editing and adding student with checking if data is passed through props for update
  const [studentName, setStudentName] = useState("");
  const [studentClassName, setStudentClassName] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
  const [studentGuardianName, setStudentGuardianName] = useState("");

  const [showClassOptions, setShowClassOptions] = useState(false);

  //update class name and toggle dropdown
  const updateClassName = (className) => {
    setStudentClassName(className);
    setShowClassOptions(false);
  };

  //
  const { setMessage } = useContext(Context);

  const AddStudent = (e) => {
    e.preventDefault();
    //checking data is valid or not
    const formDataLengthIsValid = {
      studentName: studentName.trim().length > 0,
      studentClassName: studentClassName.trim().length > 0,
      studentRollNo: studentRollNo.trim().length > 0,
      studentGuardianName: studentGuardianName.trim().length > 0,
      studentPhoneNumber: studentPhoneNumber.trim().length > 0,
      studentAddress: studentAddress.trim().length > 0,
    };

    let formIsValid = true;
    for (let e in formDataLengthIsValid) {
      formIsValid = formIsValid && formDataLengthIsValid[e];
    }

    if (formIsValid) {
      //checking if student roll no is already taken
      if (studentRollNo > 0) {
        ADD_STUDENT({
          Name: studentName,
          Class: studentClassName,
          RollNo: studentRollNo,
          "Guardian Name": studentGuardianName,
          "Phone Number": studentPhoneNumber,
          Address: studentAddress,
          linkedUsername: "test",
        });
        setStudentName("");
        setStudentPhoneNumber("");
        setStudentRollNo("");
        setStudentGuardianName("");
        setStudentClassName("");
        setStudentAddress("");
      } else {
        setMessage({ text: "Roll no cannot be less than 1." });
      }
    } else {
      setMessage({ text: "Any input field cannot be empty." });
    }
  };

  return (
    <form className="new--form" onSubmit={AddStudent}>
      <label htmlFor="name">Student Name</label>
      <input type="text" id="name" value={studentName} onChange={(e) => setStudentName(e.target.value)} />

      <label htmlFor="class">Class</label>
      <div className="classes--options">
        <button
          className="show--class-options-button"
          type="button"
          onClick={() => setShowClassOptions((prev) => !prev)}
          style={
            !showClassOptions
              ? {
                  borderBottomRightRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }
              : null
          }
        >
          <p>{studentClassName ? studentClassName : "Select Class from here"}</p>
          <BiCaretDown />
        </button>

        {showClassOptions ? <ClassesDropdown classes={classes} updateClassName={updateClassName} /> : null}
      </div>

      <label htmlFor="rollno">Rollno</label>
      <input type="number" id="rollno" value={studentRollNo} onChange={(e) => setStudentRollNo(e.target.value)} />

      <label htmlFor="guardian_name">Guardian Name</label>
      <input
        type="text"
        id="guardian_name"
        value={studentGuardianName}
        onChange={(e) => setStudentGuardianName(e.target.value)}
      />

      <label htmlFor="contact_number">Contact Number</label>
      <input
        type="number"
        id="contact_number"
        value={studentPhoneNumber}
        onChange={(e) => setStudentPhoneNumber(e.target.value)}
      />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" value={studentAddress} onChange={(e) => setStudentAddress(e.target.value)} />

      <button disabled={processing} className="submit--btn">
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    processing: state.students.processing,
    classes: state.classes.classes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ADD_STUDENT: (data) => dispatch(studentActions.ADD_STUDENT(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentForm);
