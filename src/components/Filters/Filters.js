import { useState } from "react";
import { BiCaretDown, HiOutlineSearch } from "react-icons/all";
import "./Filters.css";

const Filters = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);

  return (
    <div className="filters">
      <form>
        <HiOutlineSearch />
        <input type="text" placeholder="Search here" />
      </form>

      <div>
        <button onClick={() => setShowFilterOptions((prev) => !prev)}>
          <BiCaretDown />
          <span>Filter by</span>
        </button>

        <section
          className="options"
          style={!showFilterOptions ? { display: "none" } : null}
        >
          <button>Class 8</button>
          <button>Class 7</button>
          <button>Class 6</button>
          <button>Class 5</button>
          <button>Class 4</button>
          <button>Class 3</button>
        </section>
      </div>

      <div>
        <button onClick={() => setShowSortOptions((prev) => !prev)}>
          <BiCaretDown />
          <span>Sort by</span>
        </button>

        <section
          className="options"
          style={!showSortOptions ? { display: "none" } : null}
        >
          <button>Name</button>
          <button>Class</button>
          <button>Roll no</button>
        </section>
      </div>
    </div>
  );
};

export default Filters;
