import { useState, Fragment } from "react";
import AddClassForm from "../components/AddClassForm";
import AddStaffForm from "../components/AddStaffForm";
import AddStudentForm from "../components/AddStudentForm";
import "../styles/Form.css";

const AddPage = () => {
  const [radioValue, setRadioValue] = useState("student");
  return (
    <Fragment>
      <h4>Create New</h4>
      <input
        type="radio"
        name="type"
        value="staff"
        onChange={(e) => setRadioValue(e.target.value)}
      />
      <span>Staff</span>
      <input
        type="radio"
        name="type"
        value="student"
        onChange={(e) => setRadioValue(e.target.value)}
        defaultChecked
      />
      <span>Student</span>
      <input
        type="radio"
        name="type"
        value="class"
        onChange={(e) => setRadioValue(e.target.value)}
      />
      <span>Class</span>

      {radioValue === "staff" ? (
        <AddStaffForm />
      ) : radioValue === "class" ? (
        <AddClassForm />
      ) : (
        <AddStudentForm />
      )}
    </Fragment>
  );
};

export default AddPage;
