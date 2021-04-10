import { useState } from "react";
import { BiCaretDown } from "react-icons/all";
import "../styles/Filterby.css";

const FilterBy = ({ onlySearchBox, setFilterOption }) => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  return (
    <div style={onlySearchBox ? { display: "none" } : null} className="filterby">
      <button onClick={() => setShowFilterOptions((prev) => !prev)}>
        <BiCaretDown />
        <span>Search by</span>
      </button>

      <section className="options" style={!showFilterOptions ? { display: "none" } : null}>
        <button onClick={() => setFilterOption("Class")}>Class</button>
        <button onClick={() => setFilterOption("Name")}>Name</button>
        <button onClick={() => setFilterOption("RollNo")}> Rollno</button>
      </section>
    </div>
  );
};

export default FilterBy;
