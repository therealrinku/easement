import { useState } from "react";
import { BiCaretDown } from "react-icons/all";

const SortBy = () => {
  const [showSortOptions, setShowSortOptions] = useState(false);

  return (
    <div>
      <button onClick={() => setShowSortOptions((prev) => !prev)}>
        <BiCaretDown />
        <span>Sort by</span>
      </button>

      <section className="options" style={!showSortOptions ? { display: "none" } : null}>
        <button>Name</button>
        <button>Class</button>
        <button>Roll no</button>
      </section>
    </div>
  );
};

export default SortBy;
