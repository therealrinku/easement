import { useState } from "react";
import Filters from "../components/Filters";

const EditOrDeletePage = () => {
  const [radioValue, setRadioValue] = useState("student");
  return (
    <div className="page">
      <h4>Edit/Delete</h4>
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
      <Filters />
    </div>
  );
};

export default EditOrDeletePage;
