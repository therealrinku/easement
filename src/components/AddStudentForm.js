import { useState, useContext } from "react";
import Alert from "./Alert";
import { BiCaretDown } from "react-icons/all";
import { addStudent } from "../actions/studentActions";
import Context from "../context/Context";
import ClassesDropdown from "./ClassesDropdown";

const AddStudentForm = () => {
  const [studentName, setStudentName] = useState("");
  const [studentClassName, setStudentClassName] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
  const [studentGuardianName, setStudentGuardianName] = useState("");

  const [msg, setMsg] = useState("");
  const [showClassOptions, setShowClassOptions] = useState(false);

  //update class name and toggle dropdown
  const updateClassName = (className) => {
    setStudentClassName(className);
    setShowClassOptions(false);
  };

  //
  const { students, classes } = useContext(Context);

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
      if (
        students.findIndex(
          (student) =>
            student.studentClassName === studentClassName &&
            student.studentRollNo === studentRollNo
        ) < 0
      ) {
        addStudent({
          studentName,
          studentClassName,
          studentRollNo,
          studentGuardianName,
          studentPhoneNumber,
          studentAddress,
          linkedUsername: "test",
        }).then((res) => {
          setMsg(res);
          if (res.includes("created")) {
            //clearing state
            setStudentName("");
            setStudentPhoneNumber("");
            setStudentGuardianName("");
            setStudentRollNo("");
            setStudentClassName("");
            setStudentAddress("");
          }
        });
      } else {
        setMsg(`Roll no ${studentRollNo} already taken in ${studentClassName}`);
      }
    } else {
      setMsg("Any input field cannot be empty.");
    }

    setTimeout(() => {
      setMsg("");
    }, 4000);
  };

  return (
    <form className="new--form" onSubmit={AddStudent}>
      {msg ? <Alert msg={msg} /> : null}
      <label htmlFor="name">Student Name</label>
      <input
        type="text"
        id="name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

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
          <p>
            {studentClassName ? studentClassName : "Select Class from here"}
          </p>
          <BiCaretDown />
        </button>

        {showClassOptions ? (
          <ClassesDropdown
            classes={classes}
            updateClassName={updateClassName}
          />
        ) : null}
      </div>

      <label htmlFor="rollno">Rollno</label>
      <input
        type="number"
        id="rollno"
        value={studentRollNo}
        onChange={(e) => setStudentRollNo(e.target.value)}
      />

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
      <input
        type="text"
        id="address"
        value={studentAddress}
        onChange={(e) => setStudentAddress(e.target.value)}
      />

      <button className="submit--btn">Submit</button>
    </form>
  );
};

export default AddStudentForm;
