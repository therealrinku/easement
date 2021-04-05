import { useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import AddClassForm from "../components/AddClassForm";
import AddStaffForm from "../components/AddStaffForm";
import AddStudentForm from "../components/AddStudentForm";
import "../styles/Form.css";

const AddPage = () => {
  const location = useLocation();
  const [radioValue, setRadioValue] = useState(
    location.search.includes("staff")
      ? "staff"
      : location.search.includes("class")
      ? "class"
      : "student"
  );

  return (
    <Fragment>
      <h4>Create New</h4>
      <input
        type="radio"
        name="type"
        value="staff"
        onChange={(e) => setRadioValue(e.target.value)}
        checked={radioValue === "staff"}
      />
      <span>Staff</span>
      <input
        type="radio"
        name="type"
        value="student"
        onChange={(e) => setRadioValue(e.target.value)}
        checked={radioValue === "student"}
      />
      <span>Student</span>
      <input
        type="radio"
        name="type"
        value="class"
        onChange={(e) => setRadioValue(e.target.value)}
        checked={radioValue === "class"}
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
