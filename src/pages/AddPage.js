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
    </div>
  );
};

export default AddPage;
