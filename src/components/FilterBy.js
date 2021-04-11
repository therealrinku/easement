import { useState } from "react";
import { BiCaretDown } from "react-icons/all";

const FilterBy = ({ searchBy, setSearchBy, searchByOptions }) => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const setSearchByAndToggle = (e) => {
    setSearchBy(e.target.innerText);
    setShowFilterOptions(false);
  };

  return (
    <div>
      <button onClick={() => setShowFilterOptions((prev) => !prev)}>
        <BiCaretDown />
        <span>Search by {searchBy}</span>
      </button>

      <section className="options" style={!showFilterOptions ? { display: "none" } : null}>
        {searchByOptions.map((option) => {
          return (
            <button onClick={setSearchByAndToggle} key={option}>
              {option}
            </button>
          );
        })}
      </section>
    </div>
  );
};

export default FilterBy;
