import { useState } from "react";
import { BiCaretDown } from "react-icons/all";

const FilterBy = ({ setSearchBy }) => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const setSearchByAndToggle = (e) => {
    setSearchBy(e.target.innerText);
    setShowFilterOptions(false);
  };

  return (
    <div>
      <button onClick={() => setShowFilterOptions((prev) => !prev)}>
        <BiCaretDown />
        <span>Search by</span>
      </button>

      <section className="options" style={!showFilterOptions ? { display: "none" } : null}>
        <button onClick={setSearchByAndToggle}>Class</button>
        <button onClick={setSearchByAndToggle}>Name</button>
        <button onClick={setSearchByAndToggle}> RollNo</button>
      </section>
    </div>
  );
};

export default FilterBy;
