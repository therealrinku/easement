import { useState } from "react";
import { BiCaretDown } from "react-icons/all";

const SortBy = ({ sortBy, sortByOptions, setSortBy }) => {
  const [showSortOptions, setShowSortOptions] = useState(false);

  const setSortByAndToggle = (e) => {
    setSortBy(e.target.innerText);
    setShowSortOptions(false);
  };

  return (
    <div style={{ marginLeft: "37px" }}>
      <button onClick={() => setShowSortOptions((prev) => !prev)}>
        <BiCaretDown />
        <span>Sort by {sortBy}</span>
      </button>

      <section className="options" style={!showSortOptions ? { display: "none" } : null}>
        {sortByOptions.map((option) => {
          return (
            <button onClick={setSortByAndToggle} key={option}>
              {option}
            </button>
          );
        })}
      </section>
    </div>
  );
};

export default SortBy;
