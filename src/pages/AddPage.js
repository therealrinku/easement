import { useState } from "react";

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
      <form className="new--form">
        <label htmlFor="name">
          {radioValue === "staff" ? "Staff Name" : "Student Name"}
        </label>
        <input type="text" id="name" />

        <label htmlFor="class">
          {radioValue === "staff" ? "Role" : "Class"}
        </label>
        <input type="text" id="class" />

        <label htmlFor="rollno">
          {radioValue === "staff" ? "Salary" : "Rollno"}
        </label>
        <input type="text" id="class" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddPage;
