import { useState } from "react";
import Filters from "../components/Filters";

const EditOrDeletePage = () => {
  const [radioValue, setRadioValue] = useState("student");
  const [searchQuery, setSearchQuery] = useState("");

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
      <Filters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onlySearchBox={true}
      />
    </div>
  );
};

export default EditOrDeletePage;
