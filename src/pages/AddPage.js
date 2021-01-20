import { useState } from "react";
import AddStaffForm from "../components/AddStaffForm";
import AddStudentForm from "../components/AddStudentForm";

const AddPage = () => {
  const [radioValue, setRadioValue] = useState("student");
  return (
    <div className="page">
      <h4>Add New Staff or Student</h4>
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

      {radioValue === "staff" ? <AddStaffForm /> : <AddStudentForm />}
    </div>
  );
};

export default AddPage;
